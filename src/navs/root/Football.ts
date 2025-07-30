import { IRString } from "@/libs/i18n";
import NavigationOption from "../NavigationOption";
export const FootballChampionsNavigationOption: NavigationOption = NavigationOption.create(
    new IRString('football.championsleague'),
    '/football/championsleague',
    'https://flagcdn.com/w40/eu.png'
);
export const FootballLaLigaNavigationOption: NavigationOption = NavigationOption.create(
    new IRString('football.laliga'),
    '/football/laliga',
    'https://flagcdn.com/w40/es.png'
);

export const FootballNavigationOption: NavigationOption = NavigationOption.create(
    new IRString('nav.football'),
    '/football',
    'https://cdn-icons-png.flaticon.com/512/1099/1099672.png',
    [FootballLaLigaNavigationOption, FootballChampionsNavigationOption]
);