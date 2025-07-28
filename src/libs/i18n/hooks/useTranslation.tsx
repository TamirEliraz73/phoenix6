'use client'

import { useEffect, useState } from "react";
import IRString from '../IRString';
import { translationLoaders } from "@/libs/i18n/translation";
import { useLocale } from ".";

export default function useTranslation() {
    const { locale } = useLocale();
    const [dictionary, setDictionary] = useState<Record<string, string>>({});

    useEffect(() => {
        async function load() {
            const namespaces = Object.keys(translationLoaders);

            const entries = await Promise.all(
                namespaces.map(async (ns) => {
                    const loader = translationLoaders[ns]?.[locale];
                    if (!loader) {
                        console.warn(`Missing loader for namespace "${ns}" and locale "${locale}"`);
                        return {};
                    }

                    return await loader();
                })
            );

            const merged = Object.assign({}, ...entries);
            setDictionary(merged);
        }

        load();
    }, [locale]);

    function t(key: IRString | string): string {
        const resolvedKey = key instanceof IRString ? key.key : key;
        return dictionary[resolvedKey] ?? `[${resolvedKey}]`;
    }

    return { t };
}
