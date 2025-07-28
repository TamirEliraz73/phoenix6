import os

if __name__ == "__main__":
    BASE_DIR = "src/libs/i18n/locales"
    OUTPUT_FILE = "src/libs/i18n/translation/translationLoaders.generated.ts"

    lines = [
        "// ⚠️ AUTO-GENERATED FILE — DO NOT EDIT MANUALLY",
        "import { TranslationModule } from '@/libs/i18n/translation/TranslationModule';",
        "import { LocaleCode } from '@/libs/i18n/config';",
        "",
        "export const translationLoaders: Record<string, Record<LocaleCode, () => Promise<TranslationModule>>> = {"
    ]

    for namespace in sorted(os.listdir(BASE_DIR)):
        ns_path = os.path.join(BASE_DIR, namespace)
        if not os.path.isdir(ns_path):
            continue

        lines.append(f'  "{namespace}": {{')
        for file in sorted(os.listdir(ns_path)):
            if not file.endswith(".json"):
                continue
            locale = file.replace(".json", "")
            import_path = f"@/libs/i18n/locales/{namespace}/{locale}.json"
            lines.append(f'    "{locale}": () => import("{import_path}"),')
        lines.append("  },")

    lines.append("};\n")

    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        f.write("\n".join(lines))

    print(f"✅ translationLoaders.generated.ts created with all locale imports.")