import type { JSX, ReactNode } from "react";

export default function P({ children, className }: { children: ReactNode, className?: string }): JSX.Element {
    return (<p className={`text-xl ms-14 my-4 leading-relaxed ${className}`}>{children}</p>)
}