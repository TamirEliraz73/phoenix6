import type { SeasonTeam } from "@/libs/football/types";

export function sortLeague(teams: SeasonTeam[]): SeasonTeam[] {
    return [...teams].sort(sortByProps<SeasonTeam>([
        'points', 'wins', 'goalsDifference', 'goalsFor', 'matches'
    ]));
}
export function sortByProps<T>(props: (keyof T)[], isRegular: boolean = true): (a: T, b: T) => number {
    return (a, b) => {
        for (const prop of props) {
            const valA = a[prop];
            const valB = b[prop];
            if (typeof valA === 'number' && typeof valB === 'number') {
                if (valA !== valB) return isRegular
                    ? valB - valA
                    : valA - valB;
            } else if (valA !== valB) {
                return isRegular
                    ? String(valB).localeCompare(String(valA))
                    : String(valA).localeCompare(String(valB));
            }
        }
        return 0;
    };
}