import type { JSX, ReactNode } from "react";

export default function H4({ children, className }: { children: ReactNode, className?: string }): JSX.Element {
    return <h4 className={`text-xl font-bold text-fuchsia-400 my-4 ms-11 ${className}`}>{children}</h4>
}