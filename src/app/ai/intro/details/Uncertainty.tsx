'use client'

import type { JSX, ReactNode } from "react"
import { H3, P } from "@/components/ui/elements"
import { Section } from "@/components/ui/sections"

export default function Uncertainty(): JSX.Element {
    return (<Section SHeader={
        <H3 hasMs={false}>עקרון חוסר הוודאות (Uncertainty)</H3>
    } SInner={<Inner />} />)
}
function Inner(): JSX.Element {
    return (<div>
        <QuoteBox author="עמנואל קאנט (1724 - 1804)">
            עלינו להיזהר מביטחון שווא שנובע מהתעלמות מאופיו ההסתברותי של העולם, ומהצורך לראות שחור־לבן במקום שבו ראוי שנראה גווני אפור.
        </QuoteBox>
        <P>
            במקרים רבים לא נוכל לנבא באופן מושלם את הפלט המדויק עבור קלט נתון, עקב חוסר ידע בנוגע להתאמה בין הקלט לפלט (דבר הנקרא אי־ודאות אפיסטמית או אי־ודאות של המודל), ו/או בשל אקראיות מובנית שאינה ניתנת לצמצום בהתאמה זו (מה שנקרא אי־ודאות אליאטורית או אי־ודאות של הנתונים).
        </P><P>
            ייצוג של אי־הוודאות בניבוי שלנו עשוי להיות חשוב במגוון יישומים. לדוגמה, נחזור למקרה של הפרח הרעיל, עם מטריצת ההפסדים המוצגת בטבלה. אם אנחנו חוזים שהפרח הוא מסוג Virginica בהסתברות גבוהה — אז לא כדאי לאכול אותו. לחלופין, ייתכן שנוכל לבצע פעולה של איסוף מידע, כמו בדיקה אבחונית, כדי לצמצם את אי־הוודאות שלנו.
        </P><P>
            ניתן לייצג את אי־הוודאות שלנו באמצעות התפלגות הסתברות מותנית באופן הבא:
        </P>
        <BlockMathLTR math={'P(y=c \\text{ }|\\text{ } x;\\theta) = f_c(x;\\theta)'} />
        <P>
            כאשר <InlineMathLTR math={'f:\\mathcal{X} \\to [0,1]^c'} /> ממפה קלטים להתפלגות הסתברותית על פני <InlineMathLTR math={'C'} /> תוויות הפלט האפשריות.
            מכיוון ש־<InlineMathLTR math={'f_c(x,\\theta)'} /> מחזיר את ההסתברות לתווית <InlineMathLTR math={'c'} />, נדרש ש־<InlineMathLTR math={'0 \\le f_c \\le 1'} /> לכל <InlineMathLTR math={'c'} />, ושהסכום הכולל יהיה (כנדרש מכל התפלגות):
        </P>
        <BlockMathLTR math={'\\sum_{c=1}^C (f_c) = 1'} />
        <P>

            כדי להימנע מהמגבלות האלה, נהוג במקום זאת לדרוש מהמודל להחזיר לוגריתמים לא־מנורמלים של הסתברויות.
            לאחר מכן, ניתן להמיר את הערכים האלה להסתברויות באמצעות פונקציית הסופטמקס (softmax), שמוגדרת כך:
        </P>
        <BlockMathLTR math={`
            \\text{softmax}(a) \\coloneqq \\Bigg[
            
            \\frac{e^{a_1}}{
            \\sum_{c_i=1}^{C}(e^{a_{c_i}})
            }, \\dots, 
            \\frac{e^{a_C}}{
            \\sum_{c_i=1}^{C}(e^{a_{c_i}})
            }\\Bigg]
            `} />
        <P>
            הפונקציה הזו מבצעת מיפוי <InlineMathLTR math={'\\R^C \\to [0,1]^C'} />  ועומדת בתנאים של התפלגות הסתברותית.
            כל הערכים <InlineMathLTR math={'a = f(x,\\theta)'} /> נקראים גם לוגיטס (logits), עליהם נרחיב בהמשך.
            כעת ניתן להגדיר את כל המודל באופן הבא:
        </P>
        <BlockMathLTR math={'P(y=c \\text{ }|\\text{ } x;\\theta) = \\text{softmax}_{c} (f(x;\\theta))'} />
        <P>
            מקרה פרטי נפוץ של זה מופיע כאשר <InlineMathLTR math={'f'} /> היא פונקציה אפינית (affine function) מהצורה הבאה:
        </P>
        <BlockMathLTR math={`
            f(x,\\theta)=b+w^{\\intercal}x = b + w_1 x_1 + w_2 x_2 + \\dots + w_D x_D = b + \\sum_{i=1}^D(w_i x_i)
            `} />
        <P>
            כאשר <InlineMathLTR math={'\\theta = (b,w)'} />. קל לראות שמדובר במבנה דמוי ליניארי.
            מודל זה נקרא רגרסיה לוגיסטית (logistic regression), ויידון בפירוט רב יותר בשלב מאוחר יותר.
        </P>
        <P>
            בסטטיסטיקה, הפרמטרים <InlineMathLTR math={'w'} /> נקראים לרוב מקדמי רגרסיה (ובדרך כלל מסומנים ב־<InlineMathLTR math={'\\beta'} />), והפרמטר <InlineMathLTR math={'b'} /> נקרא נמנע (intercept).
            בלמידת מכונה, לעומת זאת, הפרמטרים <InlineMathLTR math={'w'} /> מכונים משקלים, ו־b נקרא הטיה (bias).

            מינוח זה מגיע מתחום הנדסת החשמל, שבו מסתכלים על הפונקציה <InlineMathLTR math={'f'} /> כעל מעגל חשמלי שמקבל את <InlineMathLTR math={'x'} /> ומחזיר את <InlineMathLTR math={'f(x)'} />. כל קלט מוזן למעגל דרך "חוטים", שעליהם יש משקלים <InlineMathLTR math={'w'} />.
            המעגל מחשב סכום משוקלל של הקלטים, ומוסיף ערך קבוע - הטיה או היסט <InlineMathLTR math={'b'} />.

            יש לשים לב ש"bias" במובן הזה אינו אותו "הטיה" כמו ההטיה הסטטיסטית שתידון בהמשך.
        </P>
        <P>
            כדי לפשט את הסימון, נהוג לשלב את איבר ההטיה <InlineMathLTR math={'b'} /> בתוך וקטור המשקלים <InlineMathLTR math={'w'} />, על־ידי הגדרת
        </P>
        <BlockMathLTR math={`
        \\begin{cases}
   \\tilde{w} & = & [b, w₁, \\dots, w_D] \\\\
   \\tilde{x} & = & [1, x₁, \\dots, x_D]
\\end{cases}`} />
        <P>
            כך שמתקיים:
        </P>
        <BlockMathLTR math={'\\tilde{w}^{\\intercal}\\tilde{x} = b + w^{\\intercal}x'} />
        <P>
            באופן הזה, הפונקציה האפינית הופכת לפונקציה ליניארית ממש.

            בדרך כלל נניח שהטרנספורמציה הזו כבר בוצעה, ולכן נוכל פשוט לרשום את פונקציית החיזוי כך:
        </P>
        <BlockMathLTR math={'f(x; w) = w^{\\intercal}x'} />
    </div >)
}


import { Quote as QuoteIcon } from "lucide-react";
import { BlockMathLTR, InlineMathLTR } from "@/components/ui/boxes"

export interface QuoteBoxProps {
    author?: string;
    source?: string;
    children: ReactNode;
}

export function QuoteBox({ author, source, children }: QuoteBoxProps) {
    return (
        <figure className="relative p-6 my-8 mx-8 border-s-4 border-gray-400 bg-gray-50 dark:bg-gray-800 font-serif">
            <QuoteIcon className="absolute top-4 end-4 w-8 h-8 text-gray-300 dark:text-gray-700 opacity-50" />
            <blockquote className="pl-12 text-gray-800 dark:text-gray-200 text-xl italic leading-relaxed">
                {children}
            </blockquote>
            {(author || source) && (
                <figcaption className="mt-4 text-gray-600 dark:text-gray-400 text-end me-2 font-sans">
                    {author && <span className="font-semibold">{author}</span>}
                    {author && source && <span className="mx-1">,</span>}
                    {source && <cite className="italic">{source}</cite>}
                </figcaption>
            )}
        </figure>
    );
}