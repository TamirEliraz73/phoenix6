import { IRString } from '@/libs/i18n';
import { NavigationOption } from '..';

export { AboutNavigationOption } from './About'
export { ContactNavigationOption } from './Contact'
export { FootballNavigationOption } from './Football'
export { HomeNavigationOption } from './Home'
export const UkraineNavigationOption: NavigationOption = NavigationOption.create(
    new IRString('nav.ukraine'),
    '/ukraine',
    'https://cdn-icons-png.flaticon.com/512/10985/10985844.png'
);
export const BringThemHomeNavigationOption: NavigationOption = NavigationOption.create(
    new IRString('nav.bringThemHome'),
    '/bringThemHome',
    'https://upload.wikimedia.org/wikipedia/commons/d/db/Yellow_Ribbon.png'
);
export const AIIntroNavigationOption: NavigationOption = NavigationOption.create(
    new IRString('nav.aiIntroduction'),
    '/ai/intro',
    'https://cdn-icons-png.flaticon.com/512/4616/4616809.png'
);
export const PhysicsNavigationOption: NavigationOption = NavigationOption.create(
    new IRString('nav.physics'),
    '/physics',
    'https://cdn-icons-png.flaticon.com/512/3254/3254075.png'
)