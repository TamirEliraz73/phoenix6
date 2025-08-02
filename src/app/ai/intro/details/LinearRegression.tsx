import { FullFeaturedScatter, Scatter } from "@/components/plots";
import { BlockMathLTR, InlineMathLTR } from "@/components/ui/boxes";
import { H3, P } from "@/components/ui/elements";
import { Section } from "@/components/ui/sections";
import type { JSX } from "react";

export default function LinearRegression(): JSX.Element {
    return (<Section SHeader={
        <H3 hasMs={false}>רגרסיה ליניארית (Linear Regression)</H3>
    } SInner={<Inner />} />)
}
function Inner(): JSX.Element {
    const ys: number[] = [3.5, -0.7, -0.7, 1.2, -0.5, -6.8, -2.8, -5.3, -5.0, -3.3, -3.3, 0.0, -0.8, -0.8, 2.0, 3.4, 7.5, 6.2, 9.8, 10.0, 9.5]

    return (
        <div>
            <div className="flex flex-row gap-2 ms-2">
                <FullFeaturedScatter xFrom={0} xTo={20} ys={ys} width={500} height={400} showLegend={false} />
                <Scatter xFrom={0} xTo={20} ys={ys} width={500} height={400} />
            </div>
            <P>
                בתור דוגמה למודל רגרסיה, נציג כאן את מודל הרגרסיה הליניארית הפשוטה (כפי שמוצגת בגרף למעלה) מהסוג:
            </P>
            <BlockMathLTR math={'f(x; \\theta) = b + wx'} />
            <P>
                כאשר <InlineMathLTR math={'w'} /> הוא השיפוע, <InlineMathLTR math={'b'} /> הוא הההיסט (offset), ו־<InlineMathLTR math={'\\theta = (w,b)'} /> הם הפרמטרים של המודל.
                על־ידי כוונון הפרמטרים <InlineMathLTR math={'\\theta'} />, נוכל למזער את סכום שגיאות הריבוע, המיוצגות בקווים האנכיים בתרשים למעלה,
                עד שנמצא את פתרון המינימום ריבועים (Least Squares):
            </P>
            <BlockMathLTR math={'\\hat{\\theta} = \\underset{\\theta}{\\text{argmin }}\\text{MSE}(\\theta)'} />
            <P>
                אם יש לנו מספר מאפיינים (פיצ'רים) בקלט, נוכל לכתוב:
            </P>
            <BlockMathLTR math={'f(x; \\theta) = b + w_1 x_1 + \\dots + w_D x_D = b + \\sum_{i=1}^{D} w_i x_i = b + w^\\intercal x'} />
            <P>
                כאשר <InlineMathLTR math={'\\theta = (w, b)'} />. זהו מודל שנקרא רגרסיה ליניארית מרובת משתנים (multiple linear regression).
            </P><P>
                לדוגמה, נניח שאנו רוצים לחזות את הטמפרטורה על סמך מיקום דו־ממדי בתוך חדר.
                תרשים 1.6(a) מציג את תוצאתו של מודל ליניארי מהצורה הבאה:
            </P>
            <BlockMathLTR math={'f(x; \\theta) = b + w_1 x_1 + w_2 x_2'} />
            <P>
                ניתן להרחיב את המודל הזה לשימוש ב־<InlineMathLTR math={'D>2'} /> משתני קלט (כמו שעת היום),
                אך אז יהיה קשה יותר להמחיש אותו באופן חזותי.
            </P>
        </div>
    )
}