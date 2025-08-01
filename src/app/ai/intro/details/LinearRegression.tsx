import { H3 } from "@/components/ui/elements";
import { Section } from "@/components/ui/sections";
import type { JSX } from "react";

export default function LinearRegression(): JSX.Element {
    return (<Section SHeader={
        <H3 hasMs={false}>רגרסיה ליניארית (Linear Regression)</H3>
    } SInner={<Inner />} />)
}
function Inner(): JSX.Element {
    return (
        <div>
            TODO
        </div>
    )
}