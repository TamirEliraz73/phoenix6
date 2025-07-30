import type { JSX, ReactNode } from "react";

export default function H3({ children, className }: { children: ReactNode, className?: string }): JSX.Element {
    return <h3 className={`text-2xl font-bold text-red-400 my-4 ms-8 ${className}`}>{children}</h3>
}