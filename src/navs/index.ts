import type NavigationOption from "./NavigationOption";
import { AboutNavigationOption, ContactNavigationOption, HomeNavigationOption } from "./root/";

export { default as NavigationOption } from './NavigationOption'
export const ALL_NAVIGATION_OPTIONS: NavigationOption[] = [
    HomeNavigationOption,
    AboutNavigationOption,
    ContactNavigationOption
]