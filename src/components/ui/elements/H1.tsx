import type { JSX, ReactNode } from "react";

export default function H1({ children, className }: { children: ReactNode, className?: string }): JSX.Element {
    return (
        <h1 className={`text-5xl font-bold text-cyan-400 mb-10 ${className}`}>{children}</h1>
    )
}