import { Barcelona, Mallorca, Osasuna, RealMadrid } from ".";
import type { Team } from "../types";

const WikiLookoutTable: Map<string, Team> = new Map();
WikiLookoutTable.set("Mallorca", Mallorca)
WikiLookoutTable.set("Barcelona", Barcelona)
WikiLookoutTable.set("Real Madrid", RealMadrid)
WikiLookoutTable.set("Osasuna", Osasuna)

export default function wikiLookupTable(wikiCode: string): Team | undefined {
    return WikiLookoutTable.get(wikiCode);
}