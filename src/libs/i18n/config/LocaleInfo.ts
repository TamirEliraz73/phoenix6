export type LocaleCode = 'en' | 'he' | 'sv';
export type LocaleDirection = 'ltr' | 'rtl';
export default class LocaleInfo {
    public static fromCode(code: string): LocaleInfo | undefined {
        return Object.values(LocaleInfo).find(val => val.code === code);
    }

    public static isInLocales(locale: string): boolean {
        return !!LocaleInfo.fromCode(locale);
    }

    public static fromCodeOrDefault(code: string | LocaleCode | undefined, defaultValue: LocaleInfo = this.Hebrew): LocaleInfo {
        if (code) {
            const res: LocaleInfo | undefined = this.fromCode(code);
            return res ? res : defaultValue;
        } return defaultValue;
    }

    public get isRtl(): boolean { return this.direction === 'rtl'; }
    public get isLtr(): boolean { return !this.isRtl; }
    public get dir(): string { return this.direction.toString(); }
    public isSameDirection(other: LocaleInfo) { return this.dir === other.dir; }
    public isOppositeDirection(other: LocaleInfo) { return !this.isSameDirection(other); }

    private constructor(
        public readonly code: LocaleCode,
        public readonly name: string,
        public readonly nativeName: string,
        public readonly direction: LocaleDirection,
        public readonly flagUrl: string,
        public readonly supported: boolean,
        public readonly currentColor: string,
        public readonly hoverColor: string) { }
    public static readonly English = new LocaleInfo(
        'en',
        'English',
        'English',
        'ltr',
        'Flag-of-United-Kingdom',
        true,
        'bg-red-800',
        'hover:bg-red-800'
    );
    public static readonly Hebrew = new LocaleInfo(
        'he',
        'Hebrew',
        'עברית',
        'rtl',
        'flag-of-israel',
        true,
        'bg-blue-800',
        'hover:bg-blue-800'
    );
    public static readonly Swedish = new LocaleInfo(
        'sv',
        'Swedish',
        'Svenska',
        'ltr',
        'flag-of-sweden',
        true,
        'bg-yellow-800',
        'hover:bg-yellow-800'
    );
}