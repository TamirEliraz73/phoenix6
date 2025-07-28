import type { JSX, ReactNode } from "react";

export default function P({ children }: { children: ReactNode }): JSX.Element {
    return (
        <p>
            {children}
        </p>
    )
}