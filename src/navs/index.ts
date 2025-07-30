import type NavigationOption from "./NavigationOption";
import { AboutNavigationOption, AIIntroNavigationOption, BringThemHomeNavigationOption, ContactNavigationOption, FootballNavigationOption, HomeNavigationOption, PhysicsNavigationOption, UkraineNavigationOption } from "./root/";

export { default as NavigationOption } from './NavigationOption'
export const ALL_NAVIGATION_OPTIONS: NavigationOption[] = [
    HomeNavigationOption,
    AboutNavigationOption,
    ContactNavigationOption,
    FootballNavigationOption,
    AIIntroNavigationOption,
    PhysicsNavigationOption,
    BringThemHomeNavigationOption,
    UkraineNavigationOption
]