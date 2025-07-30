import { League } from "@/libs/football/types";

export const LaLiga: League = League.preCreate(
    'football.laliga',
    'https://1000logos.net/wp-content/uploads/2019/01/Spanish-La-Liga-Logo-2016-768x432.png',
    (place) => {
        if (place === 1) return "bg-yellow-900/30 text-yellow-200 !border-b-2 !border-b-yellow-300";
        else if (place < 5) return "bg-green-900/30 text-green-200";
        else if (place === 5) return "bg-green-900/30 text-green-200 !border-b-2 !border-b-green-300";
        else if (place < 7) return "bg-blue-900/30 text-blue-200";
        else if (place === 7) return "bg-blue-900/30 text-blue-200 !border-b-2 !border-b-blue-300";
        else if (place === 8) return "bg-purple-900/30 text-purple-200 !border-b-2 !border-b-purple-300";
        else if (place === 18) return "bg-red-900/50 text-red-200 !border-t-2 !border-t-red-300";
        else if (place > 18) return "bg-red-900/50 text-red-200";
        return "";
    });

export const PremierLeague: League = League.preCreate(
    'football.primerleague',
    'https://logos-world.net/wp-content/uploads/2023/02/Premier-League-Logo-500x281.png',
    (place) => {
        if (place === 1) return "bg-yellow-900/30 text-yellow-200 !border-b-2 !border-b-yellow-300";
        else if (place < 4) return "bg-green-900/30 text-green-200";
        else if (place === 4) return "bg-green-900/30 text-green-200 !border-b-2 !border-b-green-300";
        else if (place === 5) return "bg-blue-900/30 text-blue-200 !border-b-2 !border-b-blue-300";
        else if (place === 6) return "bg-purple-900/30 text-purple-200 !border-b-2 !border-b-purple-300";
        else if (place === 18) return "bg-red-900/50 text-red-200 !border-t-2 !border-t-red-300";
        else if (place > 18) return "bg-red-900/50 text-red-200";
        return "";
    });

export const Allsvenskan: League = League.preCreate(
    'football.allsvenskan',
    'https://1000logos.net/wp-content/uploads/2019/01/Allsvenskan-Logo-2012-768x432.png',
    (place) => {
        if (place === 1) return "bg-yellow-900/30 text-yellow-200 !border-b-2 !border-b-yellow-300";
        else if (place < 4) return "bg-green-900/30 text-green-200";
        else if (place === 4) return "bg-green-900/30 text-green-200 !border-b-2 !border-b-green-300";
        else if (place === 14) return "bg-red-900/30 text-red-200 !border-t-2 !border-t-red-300";
        else if (place > 14) return "bg-red-900/30 text-red-200";
        return "";
    });

export const ChampionsLeague: League = League.preCreate(
    'football.championsleague',
    'https://1000logos.net/wp-content/uploads/2022/01/UEFA-Champions-League-logo-2012-768x480.png',
    (place) => {
        if (place < 8) return "bg-yellow-900/30 text-yellow-200";
        if (place === 8) return "bg-yellow-900/30 text-yellow-200 !border-b-2 !border-b-yellow-300";
        else if (place < 16) return "bg-green-900/30 text-green-200";
        else if (place === 16) return "bg-green-900/30 text-green-200 !border-b-2 !border-b-green-300";
        else if (place < 24) return "bg-blue-900/30 text-blue-200";
        else if (place === 24) return "bg-blue-900/30 text-blue-200 !border-b-2 !border-b-blue-300";
        else return "";
    });

export const LigatHaal: League = League.preCreate(
    'football.ligathaal',
    'https://flagcdn.com/w40/il.png',
    (place) => {
        if (place < 6) return "bg-green-900/30 text-green-200";
        if (place === 6) return "bg-green-900/30 text-green-200 !border-b-2 !border-b-green-300";
        else return "bg-red-900/30 text-red-200"
    })

export const WorldCupEuropeanQualification: League = League.preCreate(
    'football.worldcupeuropeanqualification',
    'https://flagcdn.com/w40/eu.png',
    (place) => {
        if (place === 1) return "bg-yellow-900/30 text-yellow-200 !border-b-2 !border-b-yellow-300";
        else if (place === 2) return "bg-green-900/30 text-green-200 !border-b-2 !border-b-green-300";
        else return ""
    }
)