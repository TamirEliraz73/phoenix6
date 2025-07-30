import { BlockMathLTR, BulletList, InlineMathLTR } from "@/components/ui/boxes";
import { H1, H2, Span } from "@/components/ui/elements";
import RightTriangle from "@/components/ui/svgs/RightTriangle";
import type { JSX } from "react";

export default function PhysicsFormulasPage(): JSX.Element {
    return (
        <div className="font-sans mx-10 mt-10 text-white">
            <H1>נוסחאות נפוצות במתמטיקה ובפיזיקה</H1>
            <H2>גאומטריה</H2>
            <div className="overflow-x-auto mt-4">
                <table className="min-w-full table-auto border-collapse border border-white/30 text-right text-sm">
                    <thead className="bg-white/10 text-white/80">
                        <tr>
                            <th className="border border-white/30 px-4 py-2">צורה</th>
                            <th className="border border-white/30 px-4 py-2">היקף</th>
                            <th className="border border-white/30 px-4 py-2">שטח</th>
                            <th className="border border-white/30 px-4 py-2">נפח</th>
                        </tr>
                    </thead>
                    <tbody className="text-white/90">
                        <tr className="hover:bg-white/5 transition">
                            <td className="border border-white/30 px-4 py-2">מעגל</td>
                            <td className="border border-white/30 px-4 py-2">
                                <InlineMathLTR math="P(r) = 2\pi r" />
                            </td>
                            <td className="border border-white/30 px-4 py-2">
                                <InlineMathLTR math="S(r) = \pi r^2" />
                            </td>
                            <td></td>
                        </tr>
                        <tr className="hover:bg-white/5 transition">
                            <td className="border border-white/30 px-4 py-2">סְפִירָה</td>
                            <td></td>
                            <td className="border border-white/30 px-4 py-2">
                                <InlineMathLTR math="S(r) = 4\pi r^2" />
                            </td>
                            <td className="border border-white/30 px-4 py-2">
                                <InlineMathLTR math="V(r) = \frac 4 3 \pi r^3" />
                            </td>
                        </tr>
                        {/* תוכל להוסיף עוד שורות כאן לצורות אחרות */}
                    </tbody>
                </table>
            </div>

            <H2>נוסחת השורשים</H2>

            <BlockMathLTR math="f(x)=ax^2+bx+c \implies x_{1,2}=\frac{-b\plusmn\sqrt{b^2-4ac}}{2a}" />

            <H2>טריגונומטריה</H2>

            <div dir="ltr" className="flex flex-row justify-center items-center gap-10">
                <div className="flex flex-col gap-5">
                    <InlineMathLTR math="\sin(\theta) = \frac{\text{ניצב מול}}{\text{היתר}} = \frac{a}{c}" />
                    <InlineMathLTR math="\cos(\theta) = \frac{\text{ניצב ליד}}{\text{היתר}} = \frac{b}{c}" />
                    <InlineMathLTR math="\tg(\theta) = \frac{\text{ניצב מול}}{\text{ניצב ליד}} = \frac{a}{b}" />
                </div>
                <RightTriangle />
                <div className="flex flex-col gap-5">
                    <InlineMathLTR math="\sec(\theta) = \frac{\text{היתר}}{\text{ניצב מול}} = \frac{c}{a}" />
                    <InlineMathLTR math="\csc(\theta) = \frac{\text{היתר}}{\text{ניצב ליד}} = \frac{c}{b}" />
                    <InlineMathLTR math="\cot(\theta) = \frac{\text{ניצב ליד}}{\text{ניצב מול}} = \frac{b}{a}" />
                </div>
            </div>
            <H2>משפט פיתגורס</H2>
            <BlockMathLTR math="a^2+b^2=c^2" />
        </div>
    )
}