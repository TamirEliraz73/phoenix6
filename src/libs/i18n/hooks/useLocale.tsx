'use client'
import { useContext } from "react";
import { LocaleContext } from "../providers/LocaleProvider";
import type { LocaleContextType } from "../types";

export default function useLocale(): LocaleContextType {
    const context = useContext(LocaleContext)
    if (!context) throw new Error('useLocale must be used within a LocaleProvider')
    return context
}