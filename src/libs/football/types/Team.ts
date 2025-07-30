import type { IRString } from "@/libs/i18n";
import StaticDataElement from "@/libs/i18n/handlers/StaticDataElement";
import { League } from ".";
class InvalidTeamError extends Error {
    constructor(irString: string) {
        super(`Invalid team: ${irString}`);
        this.name = 'InvalidTeamError';
    }
}
export default class Team extends StaticDataElement {
    private static readonly teams: Map<string, Team> = new Map();
    protected constructor(
        public readonly name: string | IRString,
        public readonly league: League | League[],
        public readonly stadium: IRString | string,
        public readonly iconUrl: string,
        public readonly wikiCode?: string
    ) { super(name) }
    public static preCreate(
        name: string | IRString,
        league: League | League[],
        stadium: IRString | string,
        iconUrl: string,
        wikiCode?: string) {
        this.teams.set(wikiCode ?? name.toString(),
            new Team(name, league, stadium, iconUrl, wikiCode))
        return this.teams.get(wikiCode ?? name.toString());
    }
    public static getTeam(wikiCode: string): Team {
        const res = this.teams.get(wikiCode);
        if (!res) throw new InvalidTeamError(`Could not find team ${wikiCode}`);
        return res;
    }
}