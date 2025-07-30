import type { JSX, ReactNode } from "react";

export default function H2({ children, className }: { children: ReactNode, className?: string }): JSX.Element {
    return <h2 className={`text-3xl font-bold text-yellow-400 my-4 ms-5 ${className}`}>{children}</h2>

}