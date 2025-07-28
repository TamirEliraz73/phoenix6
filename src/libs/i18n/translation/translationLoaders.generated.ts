// ⚠️ AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
import { TranslationModule } from '@/libs/i18n/translation/TranslationModule';
import { LocaleCode } from '@/libs/i18n/config';

export const translationLoaders: Record<string, Record<LocaleCode, () => Promise<TranslationModule>>> = {
  "about": {
    "en": () => import("@/libs/i18n/locales/about/en.json"),
    "he": () => import("@/libs/i18n/locales/about/he.json"),
    "sv": () => import("@/libs/i18n/locales/about/sv.json"),
  },
  "book": {
    "en": () => import("@/libs/i18n/locales/book/en.json"),
    "he": () => import("@/libs/i18n/locales/book/he.json"),
    "sv": () => import("@/libs/i18n/locales/book/sv.json"),
  },
  "common": {
    "en": () => import("@/libs/i18n/locales/common/en.json"),
    "he": () => import("@/libs/i18n/locales/common/he.json"),
    "sv": () => import("@/libs/i18n/locales/common/sv.json"),
  },
  "country": {
    "en": () => import("@/libs/i18n/locales/country/en.json"),
    "he": () => import("@/libs/i18n/locales/country/he.json"),
    "sv": () => import("@/libs/i18n/locales/country/sv.json"),
  },
  "football": {
    "en": () => import("@/libs/i18n/locales/football/en.json"),
    "he": () => import("@/libs/i18n/locales/football/he.json"),
    "sv": () => import("@/libs/i18n/locales/football/sv.json"),
  },
  "home": {
    "en": () => import("@/libs/i18n/locales/home/en.json"),
    "he": () => import("@/libs/i18n/locales/home/he.json"),
    "sv": () => import("@/libs/i18n/locales/home/sv.json"),
  },
  "navbar": {
    "en": () => import("@/libs/i18n/locales/navbar/en.json"),
    "he": () => import("@/libs/i18n/locales/navbar/he.json"),
    "sv": () => import("@/libs/i18n/locales/navbar/sv.json"),
  },
};
