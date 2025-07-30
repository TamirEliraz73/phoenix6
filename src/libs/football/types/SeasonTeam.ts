import type { Result, TeamStats } from "@/app/api/wiki/football";
import { Team } from ".";
import type { IRString } from "@/libs/i18n";

export default class SeasonTeam {
    private constructor(
        public readonly team: Team,
        public readonly win: number,
        public readonly draw: number,
        public readonly loss: number,
        public readonly gf: number,
        public readonly ga: number,
    ) { }
    public get gd(): number { return this.gf - this.ga; }
    public get point(): number { return this.win * 3 + this.draw; }
    public get match(): number { return this.win + this.draw + this.loss; }
    public get irString(): IRString { return this.team.irString; }
    public get iconUrl(): string { return this.team.iconUrl; }
    public get wikiCode(): string { return this.team.wikiCode!; }

    public get goalsFor(): number { return this.gf; }
    public get goalsAgainst(): number { return this.ga; }
    public get goalsDifference(): number { return this.gd; }
    public get wins(): number { return this.win; }
    public get draws(): number { return this.draw; }
    public get losses(): number { return this.loss; }
    public get points(): number { return this.point; }
    public get matches(): number { return this.match; }

    public static create(teamStats: TeamStats): SeasonTeam {
        const team: Team = Team.getTeam(teamStats.team);
        return new SeasonTeam(team,
            teamStats.win, teamStats.draw, teamStats.loss, teamStats.gf, teamStats.ga
        );
    }
    public static parseSeason(result: Result): SeasonTeam[] {
        return result.teams.map((team: TeamStats) => SeasonTeam.create(team))
    }
}