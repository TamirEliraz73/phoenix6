import type { JSX, ReactNode } from "react";

export default function Span({ children }: { children: ReactNode }): JSX.Element {
    return (
        <span>
            {children}
        </span>
    )
}