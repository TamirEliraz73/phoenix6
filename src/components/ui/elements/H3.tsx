import type { JSX, ReactNode } from "react";

export default function H3({ children }: { children: ReactNode }): JSX.Element {
    return (
        <h3>
            {children}
        </h3>
    )
}