'use client'

import React, { createContext, ReactNode, useEffect, useMemo, useState } from 'react'
import { LocaleCode, LocaleInfo } from "@/libs/i18n/config";
import type { LocaleContextType } from '../types';

const STORAGE_KEY = 'locale';
export const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export default function LocaleProvider({ children, initialLocale }: { children: ReactNode; initialLocale: LocaleCode }) {
    const [localeCode, setLocaleCode] = useState<LocaleCode>(initialLocale);

    useEffect(() => {
        const saved = localStorage.getItem(STORAGE_KEY) as LocaleCode | null;
        if (saved && saved !== localeCode && LocaleInfo.isInLocales(saved)) {
            setLocaleCode(saved);
        }
    }, [localeCode]);

    const setLocale = (newLocale: LocaleCode) => {
        setLocaleCode(newLocale);
        localStorage.setItem(STORAGE_KEY, newLocale);
        document.cookie = `locale=${newLocale}; path=/; max-age=31536000`;
    };

    // אובייקט מלא לפי הקוד
    const localeInfo = LocaleInfo.fromCode(localeCode) ?? LocaleInfo.Hebrew;


    useEffect(() => {
        document.documentElement.lang = localeInfo.code;
        document.documentElement.dir = localeInfo.direction;
    }, [localeInfo]);

    const value = useMemo(() => ({
        locale: localeInfo.code,
        localeInfo,
        setLocale,
        direction: localeInfo.direction,
    }), [localeInfo]);

    return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}