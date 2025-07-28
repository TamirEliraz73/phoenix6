'use client'
import { useEffect, useState, type JSX } from "react";
import type DropdownButtonProps from "./NavbarProps";
import Image from "next/image";
import { ChevronDownIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useTranslation } from "@/libs/i18n/hooks";
import { UIdGenerator } from "@/libs/generators";
import NavButton from "./NavButton";
import { navbarItemCva } from ".";

export default function DropdownButton({ op }: DropdownButtonProps): JSX.Element {
    const pathname = usePathname();
    const { t } = useTranslation();
    const router = useRouter();

    const isCurrent = pathname === op.href;

    // פתיחה אוטומטית לפי URL אם אחד הילדים תואם
    const autoOpen = pathname.startsWith(op.href) && pathname !== op.href;

    const [manualOpen, setManualOpen] = useState<boolean>(autoOpen);

    const isOpen = manualOpen === null ? autoOpen : manualOpen;

    const handleToggle = () => {
        setManualOpen(prev => !prev);
    };

    // Reset לחזור למצב "אוטומטי" אם ה־pathname משתנה לגמרי (כמו מעבר עמוד)
    useEffect(() => {
        if (manualOpen !== null && !pathname.startsWith(op.href)) {
            setManualOpen(false);
        }
    }, [pathname]);
    return (
        <div key={UIdGenerator.generate()}>
            <div className="flex flex-row">
                <button
                    onClick={() => router.push(op.href)}
                    className={`${navbarItemCva({ current: isCurrent })} w-full text-start flex items-center`}
                >
                    {op.imageSrc && (
                        <Image src={op.imageSrc} alt="" width={24} height={24} />
                    )}
                    <span className={`ps-2 flex-1 ${autoOpen ? 'font-bold text-green-600' : ''}`}>{t(op.name)}</span>
                </button>
                <span
                    className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                    <div className="h-full flex items-center justify-center px-2">
                        <ChevronDownIcon className="w-4 h-4 cursor-pointer" onClick={handleToggle} />
                    </div>
                </span>
            </div>
            {isOpen && (
                <div className="ms-7 mt-1 flex flex-col space-y-1 text-sm">
                    {op.children?.map((child) => {
                        const isDropdown = !!child.children;
                        return (
                            <div key={UIdGenerator.generate()}>
                                {isDropdown ? <DropdownButton op={child} /> :
                                    <NavButton op={child} extraClassName="text-sm ms-3 hover:bg-blue-600 rounded" />}
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    );
}