import type { IRString } from "@/libs/i18n";

export default class NavigationOption {
    private constructor(public readonly name: IRString,
        public readonly href: string,
        public readonly imageSrc?: string,
        public readonly children?: NavigationOption[]) { }

    static create(name: IRString, href: string, imageSrc?: string, children?: NavigationOption[]) {
        return new NavigationOption(name, href, imageSrc, children);
    }
}