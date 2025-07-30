import type { JSX } from "react";
import { BlockMath } from "react-katex";

export default function BlockMathLTR({ math }: { math: string }): JSX.Element {
    return (
        <div dir={'ltr'}>
            <BlockMath math={math} />
        </div>
    )
}