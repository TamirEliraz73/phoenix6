'use client'
import type { TeamStats } from "@/app/api/wiki/football";
import generateAllTeams from "@/libs/football/generator";
import { sortLeague } from "@/libs/football/handlers/LeagueHandler";
import { SeasonTeam, type League } from "@/libs/football/types";
import { useTranslation } from "@/libs/i18n/hooks";
import { useEffect, useState } from "react";
import { motion } from 'framer-motion'
import { TooltipProvider } from '@/components/ui/tooltip'
import FootballTableHeader from "./FootballTableHeader";
import FootballTableTitle from "./FootballTableTitle";
import { BaseImage } from "../../images";
import { Barcelona, RealMadrid } from "@/libs/football/instances";

export default function FootballTable({ page, league }: { page: string, league: League }) {
    const [teams, setTeams] = useState<SeasonTeam[]>();
    const [updatedAt, setUpdatedAt] = useState<string>();
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<null | string>(null)
    const { t } = useTranslation();

    generateAllTeams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`http://localhost:3000/api/wiki/football/table?page=${page}`);
                if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
                const json = await res.json()
                setTeams(sortLeague(json.teams.map((t: TeamStats) => SeasonTeam.create(t))));
                setUpdatedAt(json.updatedAt);
            } catch (err: any) {
                setError(err.message || 'Unknown error')
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    if (loading) return <div>Loading…</div>
    if (error) return <div>Error: {error}</div>
    return (
        <div className="select-none">
            <TooltipProvider>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="overflow-x-auto rounded-xl shadow-2xl border border-neutral-800"
                >
                    <FootballTableTitle league={league} updatedAt={updatedAt!} />

                    <table className="w-full text-sm text-left table-auto">
                        <FootballTableHeader />

                        <tbody className="divide-y divide-neutral-800">

                            {teams?.map((team: SeasonTeam, index: number) => {
                                const isBarcelona: boolean = team.team === Barcelona;
                                const isRealMadrid: boolean = team.team === RealMadrid;
                                return <motion.tr
                                    layout
                                    key={team.irString.toString()}
                                    className={`${league.getRowClass(index + 1)} hover:bg-white/15 transition-colors
                                    ${isBarcelona ? 'bg-sky-900' : ''}
                                    ${isRealMadrid ? 'bg-cyan-900' : ''}`}>

                                    <td className="px-4 py-2 text-right font-semibold text-neutral-400">
                                        {index + 1}
                                    </td>
                                    <td className="px-2 py-2 flex items-center gap-5 whitespace-nowrap">
                                        <BaseImage
                                            src={team.iconUrl}
                                            alt={t(team.irString)}
                                            className="rounded-sm"
                                        />
                                        <span className="text-white">{t(team.irString)}</span>
                                    </td>
                                    <td className="text-center font-mono text-neutral-200">{team.matches}</td>
                                    <td className="text-center font-mono text-green-300">
                                        <div className="flex justify-center items-center gap-1">
                                            {team.wins}
                                        </div>
                                    </td>

                                    <td className="text-center font-mono text-yellow-300">
                                        <div className="flex justify-center items-center gap-1">
                                            {team.draws}
                                        </div>
                                    </td>

                                    <td className="text-center font-mono text-red-300">
                                        <div className="flex justify-center items-center gap-1">
                                            {team.losses}
                                        </div>
                                    </td>
                                    <td className="text-center font-mono text-green-300">{team.goalsFor}</td>
                                    <td className="text-center font-mono text-red-300">{team.goalsAgainst}</td>
                                    <td className="text-center font-mono text-blue-300">{team.goalsDifference}</td>
                                    <td className="text-center font-bold text-white">{team.points}</td>
                                </motion.tr>
                            })}
                        </tbody>
                    </table>
                </motion.div>
            </TooltipProvider>
        </div >
    )
}