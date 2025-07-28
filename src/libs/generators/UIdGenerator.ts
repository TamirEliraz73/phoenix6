export default class UIdGenerator {
    private static _ids: number = -1;
    public static generate(): number { return ++this._ids; }
}