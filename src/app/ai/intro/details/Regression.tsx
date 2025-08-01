'use client'
import { BlockMathLTR, InlineMathLTR } from "@/components/ui/boxes";
import { H3, P } from "@/components/ui/elements";
import { Section } from "@/components/ui/sections";
import type { JSX } from "react";
import LinearRegression from "./LinearRegression";

export default function Regression(): JSX.Element {
    return (<Section SHeader={
        <H3 hasMs={false}>רגרסיה (Regression)</H3>
    } SInner={
        <>
            <Inner />
            <div className="ms-5">
                <LinearRegression />
            </div>
        </>
    } />)
}
function Inner(): JSX.Element {
    return (<div>
        <P>
            נניח כעת שאנו רוצים לחזות כמות ממשית <InlineMathLTR math={'y \\in \\R'} /> במקום תווית סיווג <InlineMathLTR math={'y \\in \\{1, \\dots, C\\}'} /> זהו מצב שנקרא רגרסיה (regression).
            למשל, במקרה של פרחי Iris, הערך <InlineMathLTR math={'y'} /> יכול לייצג את רמת הרעילות של הפרח אם ייאכל, או את הגובה הממוצע של הצמח.
        </P><P>
            הרגרסיה דומה מאוד לסיווג, אך כיוון שהפלט הוא רציף (שהרי <InlineMathLTR math={'y \\in \\R'} />), נשתמש בפונקציית הפסד שונה.
            ברגרסיה, הבחירה הנפוצה ביותר היא פונקציית הפסד ריבועי (<InlineMathLTR math={'\\text{quadratic loss}'} /> או <InlineMathLTR math={'l_2\\text{ loss}'} />):
        </P>
        <BlockMathLTR math={'l_2 (y, \\hat{y}) = (y - \\hat{y})^2'} />
        <P>
            פונקציה זו מענישה שגיאות גדולות יותר חזק מאשר שגיאות קטנות.
            הסיכון האמפירי (ההפסד הממוצע) כאשר משתמשים בהפסד ריבועי נקרא שגיאת ריבועים ממוצעת (mean squared error או MSE):
        </P>
        <BlockMathLTR math={'\\text{MSE}(\\theta) = \\frac{1}{N} \\sum_{n=1}^N (y_n - f(x_n; \\theta))^2'} />
        <P>
            בהתאם לדיון על חוסר הוודאות במודלים, עלינו גם לייצג את אי־הוודאות בניבוי שלנו.
            בבעיות רגרסיה, מקובל להניח שהפלט מתפלג לפי התפלגות נורמלית (גאוסית).
        </P><P>
            כפי שנסביר בפרקי החזרה על הסתברות, התפלגות זו מוגדרת כך:
        </P>
        <BlockMathLTR math={'\\mathcal{N}(y|\\mu,\\sigma^2) = \\frac{1}{\\sqrt{2 \\pi \\sigma^2}} e^{-\\frac{1}{2\\sigma^2}(y-\\mu)^2}'} />
        <P>
            כאשר <InlineMathLTR math={'\\mu'} /> הוא התוחלת, <InlineMathLTR math={'\\sigma^2'} /> הוא השונות, ו־<InlineMathLTR math={'\\sqrt{2 \\pi \\sigma^2}'} /> הוא גורם נורמליזציה שמבטיח שהשטח תחת העקומה יהיה <InlineMathLTR math={'1'} />.
        </P><P>
            בהקשר של רגרסיה, ניתן לגרום לתוחלת להיות תלויה בקלטים על־ידי הגדרת <InlineMathLTR math={'\\mu = f(x_n; \\theta)'} />.
            כך נקבל את התפלגות ההסתברות המותנית הבאה:
        </P>
        <BlockMathLTR math={'p(y_n \\text{ | } x_n; \\theta) = \\mathcal{N}(y_n \\text{ | } f(x_n; \\theta), \\sigma^2)'} />
        <P>
            אם נניח שהשונות <InlineMathLTR math={'\\sigma^2'} /> קבועה (לשם פשטות), אז ההפסד הלוג־ליניארי הממוצע (עבור דוגמה נתונה) מתקבל כך:
        </P>
        <BlockMathLTR math={`\\text{NLL}(\\theta) = -\\frac{1}{N} \\sum_{n=1}^N log\\Bigg[
            \\Bigg(\\frac{1}{2 \\pi \\sigma^2}\\Bigg)^{0.5} 
            \\text{exp}\\Bigg({-\\frac{1}{2\\sigma^2}\\bigg(y - \\underbrace{f(x_n; \\theta)}_\\mu\\bigg)^2}\\Bigg)
            \\Bigg]`} />
        <P>
            כלומר:
        </P>
        <BlockMathLTR math={'\\text{NLL}(\\theta) = \\dots = \\frac{1}{2\\sigma^2} \\text{MSE}(\\theta) + const'} />
        <P>
            מכאן אנו רואים ש:
        </P>
        <BlockMathLTR math={'\\text{NLL}(\\theta) \\propto \\text{MSE}(\\theta)'} />
        <P>
            לכן, מציאת אומדן מקסימום סבירות עבור הפרמטרים שקולה למזעור שגיאת הריבועים –
            וזו גישה שנראית הגיונית להתאמת מודל לנתונים.
        </P>
    </div>)
}