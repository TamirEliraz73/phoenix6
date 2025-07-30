import type { JSX } from "react";

export default function RightTriangle({ withText = true }: { withText?: boolean }): JSX.Element {
    return (<svg viewBox="0 0 200 160" className="w-64 h-auto">
        <polygon points="20,130 180,130 180,30" fill="#1e40af" stroke="#fff" strokeWidth="2" />
        {withText && (
            <>
                <text x="190" y="85" fill="white" fontSize="14">
                    a
                </text>
                <text x="100" y="150" fill="white" fontSize="14" textAnchor="middle">
                    b
                </text>
                <text x="90" y="70" fill="white" fontSize="14" textAnchor="middle">
                    c
                </text>

                <text x="65" y="125" fill="white" fontSize="14">
                    θ
                </text>
            </>
        )}
        <rect x="170" y="120" width="10" height="10" fill="white" />
    </svg>)
}