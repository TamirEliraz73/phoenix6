import type { JSX, ReactNode } from "react";

export default function H4({ children }: { children: ReactNode }): JSX.Element {
    return (
        <h4>
            {children}
        </h4>
    )
}