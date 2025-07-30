import clsx from "clsx"
import type { JSX, ReactNode } from "react"

export default function TabsTrigger({
    children,
    className,
    onClick,
    value,
}: {
    children: ReactNode
    className?: string
    onClick?: () => void
    value: string
}): JSX.Element {
    return (
        <button
            onClick={onClick}
            className={clsx(
                'tabs-trigger px-3 py-1.5 rounded-full text-sm font-medium transition-colors flex items-center gap-2',
                className
            )}
        >
            {children}
        </button>
    )
}