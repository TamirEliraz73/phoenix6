'use client'
import { BlockMathLTR, InlineMathLTR } from "@/components/ui/boxes";
import { H3, P } from "@/components/ui/elements";
import { Section } from "@/components/ui/sections";
import { useState, type JSX } from "react";

export default function EmpiricalRiskMinimization(): JSX.Element {

    return (
        <Section SHeader={<H3 hasMs={false}
        >מזעור השגיאה הממוצעת (Empirical Risk Minimization)</H3>}
            SInner={<Inner />} />
    )
}
function Inner() {
    return (
        <div>
            <P>
                המטרה של למידה מפוקחת היא לייצר באופן אוטומטי מודלי סיווג, כמו זה שמוצג באיור 1.4א', כדי שנוכל לחזות באופן אמין את התוויות עבור כל קלט נתון. דרך נפוצה למדוד ביצועים במשימה זו היא באמצעות שיעור הסיווג השגוי על קבוצת האימון:
            </P>

            <BlockMathLTR
                math={"\\mathcal{L}(\\theta) \\colonequals \\frac 1 N \\sum_{n=1}^N \\mathbb{I}(y_n \\neq f(x_n ; \\theta))"} />
            <P>כאשר <InlineMathLTR
                math={" \\mathbb{I} (e) "} /> היא פונקציית האינדיקטור הבינארית, שמחזירה <InlineMathLTR math="1" /> אם ורק אם התנאי <InlineMathLTR math="e" /> נכון, ומחזירה <InlineMathLTR math="0" /> אחרת, כלומר:</P>
            <BlockMathLTR
                math={`\\mathbb{I}(e) = \\begin{cases}
                        1 & e \\text{ is true} \\\\
                        0 &\\text{else}
                        \\end{cases}`} />
            <P>ההנחה הזו גורסת שכל הטעויות שוות. עם זאת, ייתכנו מקרים שבהם טעויות מסוימות יקרות יותר מאחרות. לדוגמה, נניח שאנחנו מחפשים מזון בטבע ומוצאים פרחי אירוס מסוימים. יתר על כן, נניח שסוגי ה'סטוסה' וה'ורסיקולור' טעימים, אך 'וירג'יניקה' רעילה. במקרה זה, ייתכן שנשתמש בפונקציית ההפסד הא-סימטרית <InlineMathLTR math={"l(y,\\hat{y})"} /> שמוצגת בטבלה הבאה:</P>

            <div className="flex justify-center">
                <table className="bg-purple-800 bg-opacity-30 rounded-lg">
                    <thead>
                        <tr>
                            <th className="px-4 py-3 text-start font-semibold text-purple-200 border-t border-s border-purple-700" colSpan={2}></th>
                            <th className="px-4 py-3 text-center font-semibold text-purple-200 border border-purple-700" colSpan={3}><InlineMathLTR math={"(\\hat{y}) \\text{ ערך מוערך }"} /> </th>
                        </tr>
                        <tr>
                            <th className="px-4 py-3 text-end font-semibold text-purple-200 border-s border-purple-700" colSpan={2}></th>
                            <th className="px-4 py-3 text-center font-semibold text-purple-200 border border-purple-700">Setosa</th>
                            <th className="px-4 py-3 text-center font-semibold text-purple-200 border border-purple-700">Versicolor</th>
                            <th className="px-4 py-3 text-center font-semibold text-purple-200 border border-purple-700">Virginica</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-4 py-3 text-center font-semibold text-purple-200 border border-purple-700" rowSpan={3}>
                                <InlineMathLTR math={"\\text{ערך} \\\\ \\text{אמיתי} \\\\ (y)"} /></td>
                            <td className="px-4 py-3 text-center border border-purple-700 text-purple-100">Setosa</td>
                            <td className="px-4 py-3 text-center border border-purple-700 text-white">0</td>
                            <td className="px-4 py-3 text-center border border-purple-700 text-white">1</td>
                            <td className="px-4 py-3 text-center border border-purple-700 text-white">1</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-3 text-center border border-purple-700 text-purple-100">Versicolor</td>
                            <td className="px-4 py-3 text-center border border-purple-700 text-white">1</td>
                            <td className="px-4 py-3 text-center border border-purple-700 text-white">0</td>
                            <td className="px-4 py-3 text-center border border-purple-700 text-white">1</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-3 text-center border border-purple-700 text-purple-100">Virginica</td>
                            <td className="px-4 py-3 text-center border border-purple-700 text-white">10</td>
                            <td className="px-4 py-3 text-center border border-purple-700 text-white">10</td>
                            <td className="px-4 py-3 text-center border border-purple-700 text-white">0</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <P>אז נוכל להגדיר את השגיאה הממוצעת (empirical risk) להיות ההפסד הממוצע של המנבא על קבוצת האימון:</P>
            <BlockMathLTR
                math={"\\mathcal{L}(\\theta) \\colonequals \\frac 1 N \\sum_{n=1}^N l(y_n \\neq f(x_n ; \\theta))"} />
            <P>
                אנו רואים ששיעור הסיווג השגוי <InlineMathLTR math={'\\mathcal{L}(\\theta)'} /> שווה לשגיאה הממוצעת כאשר אנו משתמשים בהפסד בינארי להשוואת התווית האמיתית עם החיזוי:
            </P>
            <BlockMathLTR math={"l_{01}(y,\\hat{y}) = \\mathbb{I}(y \\neq \\hat{y})"} />
            <P>
                דרך אחת להגדיר את בעיית התאמת המודל או האימון היא למצוא הגדרת פרמטרים שממזערת את השגיאה הממוצעת על קבוצת האימון:
            </P>
            <BlockMathLTR math={"\\hat{\\theta} = \\underset{\\theta}{\\text{argmin }} \\mathcal{L}(\\theta) = \\underset{\\theta}{\\text{argmin }} \\frac 1 N \\sum_{n=1}^N l(y_n, f(x_n ; \\theta))"} />
            <P>
                זה נקרא מזעור השגיאה הממוצעת.

                עם זאת, המטרה האמיתית שלנו היא למזער את ההפסד הצפוי על נתונים עתידיים שעדיין לא ראינו. כלומר, אנו רוצים להכליל, ולא רק להצליח על קבוצת האימון. נדון בנקודה חשובה זו בהמשך.
            </P>
        </div>
    )
}