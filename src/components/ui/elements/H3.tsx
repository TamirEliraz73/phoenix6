import clsx from "clsx";
import type { JSX, ReactNode } from "react";

export default function H3({ children, className, onClick = undefined, hasMs = true }: { children: ReactNode, className?: string, onClick?: () => void, hasMs?: boolean }): JSX.Element {
    return <h3
        onClick={onClick}
        className={clsx(`text-2xl font-bold text-green-400 my-4`,
            hasMs ? `ms-8` : '',
            className ? className : '')}>{children}</h3>
}