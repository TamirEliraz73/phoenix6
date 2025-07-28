import type { JSX, ReactNode } from "react";

export default function Footer({ children }: { children?: ReactNode }): JSX.Element {
    return (
        <footer className="h-16 flex items-center justify-center text-sm text-gray-400 border-t border-gray-700">
            <p>© 2025 My Own Phoenix</p>
        </footer>
    )
}