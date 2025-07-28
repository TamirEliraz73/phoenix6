import type { JSX, ReactNode } from "react";

export default function H1({ children }: { children: ReactNode }): JSX.Element{
    return (
        <h1>
            {children}
        </h1>
    )
}