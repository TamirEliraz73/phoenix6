import { Team } from "@/libs/football/types";
import { LaLiga, ChampionsLeague } from ".";

export const Alaves: Team = Team.preCreate("football.alaves", LaLiga, "football.mendizorrotza", 'https://assets.stickpng.com/images/584ad125b519ea740933a895.png', 'ALA');
export const AthleticBilbao: Team = Team.preCreate("football.athleticbilbao", [LaLiga, ChampionsLeague], "football.sanmames", 'https://assets.stickpng.com/images/584ad135b519ea740933a896.png', 'ATH');
export const AtleticoMadrid: Team = Team.preCreate("football.atleticomadrid", [LaLiga, ChampionsLeague], "football.metropolitano", 'https://assets.stickpng.com/images/584a9b63b080d7616d29877a.png', 'ATM');
export const Barcelona: Team = Team.preCreate("football.barcelona", [LaLiga, ChampionsLeague], "football.campnou", 'https://assets.stickpng.com/images/584a9b3bb080d7616d298777.png', 'BAR');
export const CeltaVigo: Team = Team.preCreate("football.celtavigo", LaLiga, "football.balaidos", 'https://assets.stickpng.com/images/584ad3c4b519ea740933a8df.png', 'CEL');
export const Elche: Team = Team.preCreate("football.elche", LaLiga, "football.martinezvalero", 'https://assets.stickpng.com/images/584ad4e5b519ea740933a901.png', 'ELC');
export const Espanyol: Team = Team.preCreate("football.espanyol", LaLiga, "football.rcdestadium", 'https://assets.stickpng.com/images/584ad3b5b519ea740933a8dd.png', 'ESP');
export const Getafe: Team = Team.preCreate("football.getafe", LaLiga, "football.coliseum", 'https://assets.stickpng.com/images/584ad4b1b519ea740933a8fc.png', 'GET');
export const Girona: Team = Team.preCreate("football.girona", LaLiga, "football.montilivi", 'https://assets.stickpng.com/images/584ad4b8b519ea740933a8fd.png', 'GIR');
export const LasPalmas: Team = Team.preCreate("football.laspalmas", LaLiga, "??", '', 'LPA');
export const Levante: Team = Team.preCreate("football.levante", LaLiga, "football.ciutatvalencia", 'https://upload.wikimedia.org/wikipedia/en/7/7b/Levante_Uni%C3%B3n_Deportiva%2C_S.A.D._logo.svg', 'LEV');
export const Mallorca: Team = Team.preCreate("football.mallorca", LaLiga, "football.mallorcasonmoix", 'https://assets.stickpng.com/images/584ad3aeb519ea740933a8dc.png', 'MAL');
export const Osasuna: Team = Team.preCreate("football.osasuna", LaLiga, "football.elsadar", 'https://assets.stickpng.com/images/584ad403b519ea740933a8e7.png', 'OSA');
export const RayoVallecano: Team = Team.preCreate("football.rayovallecano", LaLiga, "football.vallecas", 'https://upload.wikimedia.org/wikipedia/en/d/d8/Rayo_Vallecano_logo.svg', 'RAY');
export const RealBetis: Team = Team.preCreate("football.realbetis", LaLiga, "football.lacartuja", 'https://assets.stickpng.com/images/584ad396b519ea740933a8d9.png', 'BET');
export const RealMadrid: Team = Team.preCreate("football.realmadrid", [LaLiga, ChampionsLeague], "football.santiagobernabeu", 'https://assets.stickpng.com/images/584a9b47b080d7616d298778.png', 'RMA');
export const RealOviedo = Team.preCreate("football.realoviedo", LaLiga, "football.carlostartiere", 'https://assets.stickpng.com/images/584ad377b519ea740933a8d5.png', 'OVI');
export const RealSociedad: Team = Team.preCreate("football.realsociedad", LaLiga, "football.anoeta", 'https://assets.stickpng.com/images/584ad36ab519ea740933a8d3.png', 'RSO');
export const Sevilla: Team = Team.preCreate("football.sevilla", LaLiga, "football.ramonsanchezpizjuan", 'https://assets.stickpng.com/images/584ad291b519ea740933a8ba.png', 'SEV');
export const Valencia: Team = Team.preCreate("football.valencia", LaLiga, "football.mestalla", 'https://assets.stickpng.com/images/584ad186b519ea740933a89e.png', 'VAL');
export const Villarreal: Team = Team.preCreate("football.villarreal", [LaLiga, ChampionsLeague], "football.estadiodelaceramica", 'https://assets.stickpng.com/images/584a9b57b080d7616d298779.png', 'VIL');
export const AllTeams: Team[] = [
    Alaves,
    AthleticBilbao,
    AtleticoMadrid,
    Barcelona,
    CeltaVigo,
    Elche,
    Espanyol,
    Getafe,
    Girona,
    Levante,
    Mallorca,
    Osasuna,
    RayoVallecano,
    RealBetis,
    RealMadrid,
    RealOviedo,
    RealSociedad,
    Sevilla,
    Valencia,
    Villarreal
];