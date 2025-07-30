'use client'
import type { League } from "@/libs/football/types";
import { BaseImage } from "../../images";
import { useTranslation } from "@/libs/i18n/hooks";

export function formatDate(dateString: string): string {
    if (dateString === 'Future') return "----"
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // חודשים מתחילים מ־0
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

export default function FootballTableTitle({ league, updatedAt }: { league: League, updatedAt: string }) {
    const { t } = useTranslation();
    return (
        <div className="relative flex items-center justify-center p-4 bg-neutral-900 border-b border-neutral-800">
            <div className="flex items-center gap-4">
                <div className="flex flex-col">
                    <div className="flex flex-row">
                        <BaseImage
                            src={league.imageSrc}
                            alt={typeof league.name === 'string' ? league.name : t(league.name)}
                            width={80}
                            height={80}
                            className="rounded-md"
                        />
                        <h2 className="text-2xl font-semibold tracking-wide text-white">
                            {t(league.name)}
                        </h2>
                    </div>
                    <div className="flex flex-row text-center justify-center">
                        עונת 2025-26
                    </div>
                </div>
            </div>

            <div className="absolute end-4 text-sm text-neutral-400">
                תאריך עדכון: {formatDate(updatedAt)}
            </div>
        </div>
    )
}