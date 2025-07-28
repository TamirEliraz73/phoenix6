export default class IRString {
    public constructor(public readonly key: string) { }
    public toString(): string {
        return this.key;
    }
}