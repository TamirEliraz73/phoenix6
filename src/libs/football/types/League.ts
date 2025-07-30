import type { IRString } from "@/libs/i18n";
import StaticDataElement from "@/libs/i18n/handlers/StaticDataElement";

export default class League extends StaticDataElement {
    private constructor(name: IRString | string,
        public readonly imageSrc: string,
        public readonly getRowClass: (place: number) => string) {
        super(name);
    }

    static preCreate(name: IRString | string,
        imageSrc: string,
        getRowClass: (place: number) => string): League {
        return new League(name, imageSrc, getRowClass);
    }
}