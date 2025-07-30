'use client'
import type { MatchStats } from "@/app/api/wiki/football/MatchStats";
import generateAllTeams from "@/libs/football/generator";
import wikiLookupTable from "@/libs/football/instances/WikiLookupTable";
import { Team } from "@/libs/football/types";
import { useTranslation } from "@/libs/i18n/hooks";
import { CalendarDays, Clock, Trophy } from "lucide-react";
import { useEffect, useState } from "react";
import { BaseImage } from "@/components/images";
import { format } from "date-fns";
import { he } from "date-fns/locale";

export default function FootballNextMatch({ page, section }: { page: string, section?: number }) {
    const [nextMatch, setNextMatch] = useState<MatchStats>();
    const [team1, setTeam1] = useState<Team>();
    const [team2, setTeam2] = useState<Team>();
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<null | string>(null)
    const { t } = useTranslation();

    generateAllTeams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`http://localhost:3000/api/wiki/football/next_match?page=${page}${section ? `&section=${section}` : ''}`);
                if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
                const json = await res.json()
                setNextMatch(json);
                setTeam1(wikiLookupTable(json.team1));
                setTeam2(wikiLookupTable(json.team2));
            } catch (err: any) {
                setError(err.message || 'Unknown error')
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])
    if (loading) return <div className="text-sm text-muted-foreground">Loading...</div>
    if (error) return <div className="text-sm text-red-500">{error}</div>
    if (!nextMatch) return null

    return (
        <div className="bg-gradient-to-br from-indigo-950 via-sky-900 to-indigo-800 text-white p-6 rounded-2xl shadow-2xl w-full max-w-3xl mx-auto border border-sky-400">
            <div className="text-center mb-6">
                <h2 className="text-3xl font-extrabold tracking-tight mb-2">
                    {t("football.next_match")}
                </h2>
                <p className="text-sm text-sky-200 italic">
                    {t("football.round")} {nextMatch.round}
                </p>
            </div>

            <div className="grid grid-cols-3 items-center gap-4 mb-4">
                <div className="flex flex-col gap-2 items-center justify-center text-xl font-semibold">
                    {team1 ? (
                        <>
                            <div className="h-[50px] flex items-center justify-center">
                                <BaseImage src={team1.iconUrl} alt={team1.name.toString()} width={50} height={50} />
                            </div>
                            <div className="mt-2">{t(team1.irString)}</div>
                        </>
                    ) : (
                        <div className="text-center">{nextMatch.team1}</div>
                    )}
                </div>

                {/* <div className="text-center text-4xl font-bold text-yellow-400">vs</div> */}
                <div className="text-center text-4xl font-bold text-yellow-400">
                    <Countdown targetTime={new Date(nextMatch.parsedDate!)} />
                </div>

                <div className="flex flex-col gap-2 items-center justify-center text-xl font-semibold">
                    {team2 ? (
                        <>
                            <div className="h-[50px] flex items-center justify-center">
                                <BaseImage src={team2.iconUrl} alt={team2.name.toString()} width={50} height={50} />
                            </div>
                            <div className="mt-2">{t(team2.irString)}</div>
                        </>
                    ) : (
                        <div className="text-center">{nextMatch.team2}</div>
                    )}
                </div>
            </div>
            <div className="grid grid-cols-3 text-sm text-sky-100 text-center">
                <div className="flex flex-1 justify-center items-center gap-2">
                    <CalendarDays size={18} className="text-yellow-300" />
                    <div className="flex flex-col">
                        <span>{format(new Date(nextMatch.parsedDate!), 'd בMMMM', { locale: he })}</span>
                        <span>{format(new Date(nextMatch.parsedDate!), 'EEEE', { locale: he })}</span>
                    </div>
                </div>

                {nextMatch.time && (
                    <div className="flex flex-1 justify-center items-center gap-2">
                        <Clock size={18} className="text-pink-300" />
                        <span>{nextMatch.time.substring(0, nextMatch.time.length - 3)}</span>
                    </div>
                )}
                {team1 && (
                    <div className="flex flex-1 justify-center items-center gap-2">
                        <Trophy size={18} className="text-green-300" />
                        <span>{t(team1.stadium)}</span>
                    </div>
                )}
            </div>
        </div>
    )
}





type CountdownProps = {
    targetTime: Date
}

export function Countdown({ targetTime }: CountdownProps) {
    console.log("Get time target: " + targetTime)
    const [timeLeft, setTimeLeft] = useState(getTimeDiff(targetTime))

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(getTimeDiff(targetTime))
        }, 1000)
        return () => clearInterval(interval)
    }, [targetTime])

    if (timeLeft.total <= 0) return <div className="text-red-500 text-center">המשחק התחיל</div>

    return (
        <div className="text-center text-2xl font-bold text-yellow-400">
            <div className="flex flex-col gap-2">
                {timeLeft.weeks > 0 && <span>{weeksTranslate(timeLeft.weeks)}</span>}
                {timeLeft.days > 0 && <span>{daysTranslate(timeLeft.days % 7)}</span>}
                {pad(timeLeft.hours)}:{pad(timeLeft.minutes)}:{pad(timeLeft.seconds)}
            </div>
        </div>
    )
}

function getTimeDiff(target: Date) {
    const now = new Date()
    const total = target.getTime() - now.getTime();

    const seconds = Math.floor((total / 1000) % 60)
    const minutes = Math.floor((total / 1000 / 60) % 60)
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24)
    const days = Math.floor(total / (1000 * 60 * 60 * 24))
    const weeks = Math.floor(days / 7);

    return { total, weeks, days, hours, minutes, seconds }
}

function pad(n: number) {
    return n.toString().padStart(2, "0")
}
function weeksTranslate(w: number): string {
    return w > 2 ? `${w} שבועות` : w === 2 ? `שבועיים` : w === 1 ? `שבוע` : ''
}
function daysTranslate(d: number): string {
    return d > 2 ? `${d} ימים` : d === 2 ? `יומיים` : d === 1 ? `יום אחד` : ''
}