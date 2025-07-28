import type { JSX, ReactNode } from "react";

export default function H2({ children }: { children: ReactNode }): JSX.Element {
    return (
        <h2>
            {children}
        </h2>
    )
}