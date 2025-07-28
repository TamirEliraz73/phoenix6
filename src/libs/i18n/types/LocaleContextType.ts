import type { LocaleCode, LocaleDirection, LocaleInfo } from "../config";

export type LocaleContextType = {
    locale: LocaleCode;
    localeInfo: LocaleInfo;
    setLocale: (locale: LocaleCode) => void;
    direction: LocaleDirection;
}