'use client'

import FootballNextMatch from "@/components/football/next_match/FootballNextMatch";
import FootballTable from "@/components/football/table/FootballTable";
import { LaLiga } from "@/libs/football/instances";
import type { JSX } from "react";

export default function FootballPage():JSX.Element {
    return (
        <div className="flex flex-col gap-10 my-10 mx-5">
            <div className="flex flex-row gap-5">
                <FootballNextMatch page="2025–26_FC_Barcelona_season" section={21} />
                <FootballNextMatch page="2025–26_Real_Madrid_CF_season" section={14} />
            </div>
            <FootballTable page="Template:2025–26_La_Liga_table" league={LaLiga} />
        </div>
    )
}