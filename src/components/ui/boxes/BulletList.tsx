import type { JSX } from "react";

export default function BulletList({ items }: { items: any[] }): JSX.Element {
    return (
        <ul className="list-disc ms-20 my-2">
            {items.map((item, i) => (
                <li key={i} className="text-lg">{item}</li>
            ))}
        </ul>
    )
}