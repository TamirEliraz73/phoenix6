import type { JSX, ReactNode } from "react";
import { Disclosure } from "@headlessui/react";
import { useScrolled } from "@/hooks";
import { UIdGenerator } from "@/libs/generators";
import { LanguageSwitcher } from ".";
import { navbarCva } from "./styles";
import { Flag } from "@/components/images";

export default function Header({ children }: { children?: ReactNode }): JSX.Element {
    const scrolled: boolean = useScrolled()
    const flags: string[] = ['Druze', 'flag-of-sweden', 'flag-of-european-union', 'flag-of-wales', 'flag-of-ukraine']
    return (
        <Disclosure as="nav" className={navbarCva({ scrolled })}>
            <header className="flex flex-row-reverse items-center justify-between w-full h-12 px-6">
                {/* עמודת שמאל: כפתור שפה */}
                <div className="flex-1 flex justify-end">
                    <LanguageSwitcher />
                </div>

                {/* עמודת אמצע: דגל */}
                <div className="flex flex-1 justify-center gap-5 select-none">
                    {flags.map((flag) => (
                        <Flag key={UIdGenerator.generate()} flagUrl={flag} alt={flag} />
                    ))}
                </div>

                {/* עמודת ימין: ריק/שמורה לאיזון */}
                <div className="flex flex-1"></div><div className="flex flex-1"></div>
            </header>
        </Disclosure>
    )
}