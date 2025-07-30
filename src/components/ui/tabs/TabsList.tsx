import clsx from "clsx"
import type { JSX, ReactNode } from "react"

export default function TabsList({
    children,
    className,
}: {
    children: ReactNode
    className?: string
}): JSX.Element {
    return <div className={clsx('tabs-list', className)}>{children}</div>
}