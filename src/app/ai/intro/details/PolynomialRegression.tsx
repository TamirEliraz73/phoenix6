import { BlockMathLTR, InlineMathLTR, NoteBox } from "@/components/ui/boxes"
import { H3, P } from "@/components/ui/elements"
import { Section } from "@/components/ui/sections"
import type { JSX } from "react"

export default function PolynomialRegression(): JSX.Element {
    return (<Section SHeader={
        <H3 hasMs={false}>רגרסיה פולינומיאלית (Polynomial Regression)</H3>
    } SInner={<Inner />} />)
}
function Inner(): JSX.Element {
    return (
        <div>
            <P>
                המודל הליניארי המוצג בתרשים בסעיף הקודם (רגרסיה ליניארית) הוא בבירור לא התאמה טובה לנתונים.
                ניתן לשפר את ההתאמה באמצעות רגרסיה פולינומית מדרגה <InlineMathLTR math={'D'} />, שמוגדרת כך:
            </P>
            <BlockMathLTR math={'f(x; w) = w^\\intercal \\phi(x)'} />
            <P>
                כאשר <InlineMathLTR math={'\\phi(x)'} /> הוא וקטור מאפיינים שמתקבל מהקלט, וכולל את הרכיבים הבאים:
            </P>
            <BlockMathLTR math={'\\phi(x) = \\big[1, x, x^2, \\dots, x^D \\big]'} />

            <P>
                זוהי דוגמה פשוטה לעיבוד מוקדם של מאפיינים (feature preprocessing), או בשם נוסף — הנדסת מאפיינים (feature engineering).

                בתרשים ניתן לראות שכאשר משתמשים ב־<InlineMathLTR math={'D = 2'} />, כלומר עבור:
            </P>
            <BlockMathLTR math={'\\phi(x) = \\big[1, x, x^2 \\big]'} />
            <P>
                מתקבלת התאמה טובה בהרבה,
                ניתן להמשיך ולהגדיל את <InlineMathLTR math={'D'} />, וכך גם את מספר הפרמטרים במודל, עד שנגיע ל־<InlineMathLTR math={'D = N - 1'} /> (כאשר <InlineMathLTR math={'N'} /> הוא מספר הדוגמאות).
                במצב זה, יש פרמטר אחד לכל נקודת נתון, ולכן אפשר לבצע אינטרפולציה מושלמת לכל הנתונים — כלומר, המודל יתאים בדיוק לכל נקודה, ושגיאת הריבועים (MSE) תהיה אפס,
                אבל אינטואיטיבית, פונקציה כזו לא תהיה טובה לחיזוי של דגימות חדשות, כי היא נראית "מתפתלת מדי".
                נחזור לנושא הזה בפירוט כשנדבר על Overfitting.
            </P><P>
                אפשר גם להחיל רגרסיה פולינומית על קלטים רב־ממדיים.
                למשל, בתרשים 1.6(b) מוצגים החיזויים של מודל טמפרטורה לאחר ביצוע הרחבה ריבועית של הקלטים:
            </P>
            <BlockMathLTR math={`f(x; w) =
                 \\sum_{i=0}^4 \\big( w_i \\cdotp \\phi_i(x) \\big) =
                  w_0 + w_1 x_1 + w_2 x_2 + w_3 (x_1)^2 + w_4 (x_2)^2`} />
            <P>
                הצורה הריבועית מתאימה לנתונים טוב יותר מהמודל הליניארי שבתרשים 1.6(a),
                משום שהיא לוכדת את העובדה שהאזור המרכזי בחדר חם יותר.

                ניתן גם להוסיף איברי אינטראקציה, כמו <InlineMathLTR math={'x_1, x_2'} />, כדי לתפוס השפעות משולבות.
                (נמשיך לדון על כך בהמשך).
            </P>
            <NoteBox type="warning" title="שימו לב">
                המודלים שתיארנו עדיין משתמשים בפונקציית חיזוי שהיא ליניארית בפרמטרים <InlineMathLTR math={'w'} />,
                גם אם היא לא ליניארית בקלט <InlineMathLTR math={'x'} /> עצמו.

                הסיבה לכך שזו הבחנה חשובה היא שמודל ליניארי יוצר פונקציית הפסד מסוג MSE שיש לה מינימום גלובלי יחיד,
                כפי שמוסבר בהמשך.
            </NoteBox>
        </div>
    )
}