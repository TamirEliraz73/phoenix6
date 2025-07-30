import clsx from "clsx"
import type { JSX, ReactNode } from "react"

export default function Tabs({
    children,
    className,
}: {
    children: ReactNode
    className?: string
    value?: string // לא בשימוש – רק תיאום API
}): JSX.Element {
    return <div className={clsx('tabs-container', className)}>{children}</div>
}