import { UIdGenerator } from "@/libs/generators";
import { IRString } from "@/libs/i18n";

export default abstract class StaticDataElement {
    public readonly id: number;
    public readonly irString: IRString;

    protected constructor(public readonly name: string | IRString) {
        this.id = UIdGenerator.generate();
        this.irString = typeof name === 'string' ? new IRString(name) : name;
    }
}