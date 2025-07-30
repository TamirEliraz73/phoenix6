import type { JSX } from "react"
import { InlineMath } from "react-katex"

export default function InlineMathLTR({ math, bspace = false, aspace = false }: {
    math: string,
    bspace?: boolean,
    aspace?: boolean
}): JSX.Element {
    return (
        <span dir={'ltr'}>
            {bspace && ' '}
            <InlineMath math={math} />
            {aspace && ' '}
        </span>
    )
}