'use client'
import type { JSX } from "react";
import Image from "next/image"
import type DropdownButtonProps from "./NavbarProps";
import { usePathname } from "next/navigation";
import { useTranslation } from "@/libs/i18n/hooks";
import { UIdGenerator } from "@/libs/generators";
import { navbarItemCva } from ".";

export interface NavButtonProps extends DropdownButtonProps {
    extraClassName?: string
}
export default function NavButton({ op, extraClassName }: NavButtonProps): JSX.Element {
    const pathname: string = usePathname();
    const { t } = useTranslation();
    const isCurrent: boolean = pathname === op.href;
    return (
        <a
            key={UIdGenerator.generate()}
            href={op.href}
            className={`${navbarItemCva({ current: isCurrent })} ${extraClassName ?? ''}`}
        >
            {op.imageSrc && <Image src={op.imageSrc} alt="" width={24} height={24} />}
            <span className='ps-2'>{t(op.name)}</span>
        </a>
    )
}