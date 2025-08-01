'use client'
import { type JSX } from "react"

import { H2, H3, H4, P } from "@/components/ui/elements";
import { BlockMathLTR, InlineMathLTR, NoteBox } from "@/components/ui/boxes";
import { UIdGenerator } from "@/libs/generators";
import { Examples, DataTable } from "@/components/ui/tables-like";
import { IrisDataLoader } from "@/components/others/IrisDataLoader";
import { Section } from "@/components/ui/sections";
import EmpiricalRiskMinimization from "./EmpiricalRiskMinimization";
import Uncertainty from "./Uncertainty";
import MaximumLikelihoodEstimation from "./MaximumLikelihoodEstimation";

export default function Classification(): JSX.Element {
    return (
        <Section SHeader={<H3 hasMs={false}>
            בעיות סיווג (Classification)
        </H3>} SInner={
            <>
                <Inner />
                <div className="ms-5">
                    <EmpiricalRiskMinimization />

                    <Uncertainty />

                    <MaximumLikelihoodEstimation />
                </div>
            </>} />
    )
}
function Inner(): JSX.Element {
    return (
        <div>
            <P>
                בבעיות סיווג, מרחב הפלטים הוא קבוצה של <InlineMathLTR math={'C'} /> תגיות בדידות, לא ממויינות והדדית
                בלעדיות, הידועות בשם "מחלקות":
            </P>
            <BlockMathLTR math={'\\mathcal{Y} = \\{1, 2, ..., C\\}'} />
            <P>
                הבעיה של חיזוי תגית המחלקה על סמך הקלט נקראת גם זיהוי תבניות (<i>pattern recognition</i>).
                כאשר יש רק שתי מחלקות — לדוגמה <InlineMathLTR math={'y \\in \\{0, 1\\}'} /> או <InlineMathLTR
                    math={'y \\in \\{-1, +1\\}'} /> —
                הבעיה נקראת <b>סיווג בינארי</b> (binary classification).
            </P>

            <Examples values={[
                {
                    hebrew: "סיווג מיילים כספאם או לא ספאם",
                    english: "Classifying emails as spam or not spam",
                    example: <InlineMathLTR
                        math={'\\begin{matrix} x \\coloneqq email \\\\ y \\in \\{ spam, \\neg spam \\} \\end{matrix}'} />
                },
                {
                    hebrew: "זיהוי ז'אנר מוזיקלי לפי תכונות של הקובץ",
                    english: "Identifying music genre from file features",
                    example: <InlineMathLTR
                        math={'\\begin{matrix} x \\coloneqq features \\\\ y \\in \\{ jazz, rock, classical \\} \\end{matrix}'}
                    />
                }
            ]} />

            <H4>דוגמה: סיווג פרחי איריס</H4>

            <P>
                כדוגמה ללמידה מונחית, נבחן את בעיית הסיווג של פרחי <i>Iris</i> לשלושה
                תתי־מין: <i>Setosa</i>, <i>Versicolor</i> ו־<i>Virginica</i>.
                אלו שלוש קטגוריות שונות, והמשימה היא ללמוד למפות תצפית מסוימת (כמו תכונות מדודות של פרח) לאחת הקטגוריות
                הללו.
            </P>

            <P>
                בבעיות סיווג של תמונות, מרחב הקלט <InlineMathLTR math={'\\mathcal{X}'} /> הוא מרחב התמונות – שהוא מרחב
                בעל ממד גבוה מאוד.
                למשל, עבור תמונת צבע עם <InlineMathLTR math={'C = 3'} /> ערוצים (RGB) ומידות <InlineMathLTR
                    math={'D_1 \\times D_2'} />,
                הממד הכולל הוא <InlineMathLTR math={'D = C \\times D_1 \\times D_2'} /> כך שמתקיים <InlineMathLTR
                    math={'\\mathcal{X} = \\mathbb{R}^D'} />.
            </P>

            <P>
                אמנם בפועל הערכים של פיקסלים הם שלמים (למשל בטווח <InlineMathLTR math={'\\{0, 1, \\dots, 255\\}'} />), אך
                נוח יותר להניח שהם רציפים.
                למידת פונקציה <InlineMathLTR math={'f: \\mathcal{X} \\to \\mathcal{Y}'} /> מתמונה לתווית היא משימה מאתגרת
                במיוחד,
                שנדון בה לעומק בפרקים מאוחרים יותר (למשל, בפרק על רשתות קונבולוציה).
            </P>

            <P>
                למזלנו, בוטנאים כבר זיהו 4 תכונות מספריות פשוטות אך אינפורמטיביות:
            </P>

            <DataTable
                columns={["index", "sl", "sw", "pl", "pw", "label"]}
                data={[
                    [0, 5.1, 3.5, 1.4, 0.2, "Setosa"],
                    [1, 4.9, 3.0, 1.4, 0.2, "Setosa"],
                    [<InlineMathLTR key={UIdGenerator.generate()} math={'\\dots'} />,
                    <InlineMathLTR key={UIdGenerator.generate()} math={'\\dots'} />,
                    <InlineMathLTR key={UIdGenerator.generate()} math={'\\dots'} />,
                    <InlineMathLTR key={UIdGenerator.generate()} math={'\\dots'} />,
                    <InlineMathLTR key={UIdGenerator.generate()} math={'\\dots'} />,
                    <InlineMathLTR key={UIdGenerator.generate()} math={'\\dots'} />],
                    [50, 7.0, 3.2, 4.7, 1.4, "Versicolor"],
                    [<InlineMathLTR key={UIdGenerator.generate()} math={'\\dots'} />,
                    <InlineMathLTR key={UIdGenerator.generate()} math={'\\dots'} />,
                    <InlineMathLTR key={UIdGenerator.generate()} math={'\\dots'} />,
                    <InlineMathLTR key={UIdGenerator.generate()} math={'\\dots'} />,
                    <InlineMathLTR key={UIdGenerator.generate()} math={'\\dots'} />,
                    <InlineMathLTR key={UIdGenerator.generate()} math={'\\dots'} />],
                    [149, 5.9, 3.0, 5.1, 1.8, "Virginica"],
                    // הוספת עוד שורות לבדיקה
                ]} />

            <P>
                תכונות אלו מאפשרות להבדיל באופן די מדויק בין שלושת סוגי הפרחים. בדוגמה זו נשתמש בקלטים שהם וקטורים
                במרחב <InlineMathLTR math={'\\mathbb{R}^4'} /> (כלומר, ארבעה ממדים בלבד), מה שהופך את הבעיה לפשוטה יותר
                לעיבוד.
            </P>

            <P>
                מערך הנתונים של איריס כולל 150 דוגמאות מתויגות – 50 מכל תת־מין. כל דוגמה מתוארת על־ידי 4 התכונות הנ״ל.
                מדובר באחד ממאגרי המידע הנפוצים ביותר בלמידת מכונה, בגלל הפשטות והגודל הקטן שלו.
            </P>

            <P>
                כאשר עובדים עם נתונים כאלה, נהוג לארגן אותם במטריצה בגודל <InlineMathLTR math={'N \\times D'} /> — כל
                שורה מייצגת דוגמה אחת,
                וכל עמודה מייצגת תכונה. מטריצה כזו מכונה <b>Design Matrix</b> או מטריצת תכנון.
            </P>


            <BlockMathLTR math={'\\begin{cases} \\mathcal{X} = \\{ x | x \\in [ \\text{sl}, \\text{sw}, \\text{pl}, \\text{pw} ] \\} \\\\ \\mathcal{Y} = \\{\\text{Setosa}, \\text{Versicolor}, \\text{Virginica} \\} \\end{cases}'} />.


            <NoteBox type="info" title="טיפוסי נתונים: טבלאיים מול מבנים כלליים">
                <P>
                    נתונים טבלאיים, כמו מערכת ה־Iris, מבוססים על קלטים באורך קבוע, וקל לארגן אותם במטריצה.
                    לעומת זאת, יש מערכי נתונים שבהם הקלטים הם באורך משתנה, כמו משפטים, גרפים או רשתות חברתיות.
                    במקרים כאלה נשתמש בשיטות <b>featurization</b> — הפיכת הדאטה לוקטורים באורך קבוע — כדי שנוכל עדיין
                    ליישם עליהם למידת מכונה.
                </P>
            </NoteBox>

            <H2>ניתוח חקירתי של הנתונים (Exploratory Data Analysis)</H2>
            <P> לפני שניגשים לבעיה בעזרת למידת מכונה, נהוג
                לבצע קודם ניתוח חקירתי של הנתונים. הניתוח הזה עוזר לגלות תבניות ברורות (שעשויות להציע באילו שיטות כדאי
                להשתמש), וגם בעיות פוטנציאליות בנתונים, כמו רעש בתגיות (label noise) או ערכים קיצוניים (outliers). </P>
            <P> כאשר מדובר בנתונים טבלאיים עם מספר קטן של מאפיינים, נהוג להשתמש ב־<strong>תרשים זוגות (pair
                plot)</strong>. בתרשים כזה, התא <InlineMathLTR math={'(i, j)'} /> מציג פיזור נקודות של המשתנה
                ה־<InlineMathLTR math={'i'} /> מול המשתנה ה־<InlineMathLTR math={'j'} />, והתאים שעל
                האלכסון <InlineMathLTR math={'(i, i)'} /> מציגים את ההתפלגות השולית (marginal density) של
                המשתנה <InlineMathLTR math={'i'} />. כל התרשימים יכולים להיות מקודדים לפי צבע בהתאם לתווית הקלאס — ראה
                דוגמה באיור 1.3. </P> <P> במקרים של נתונים עם מימד גבוה יותר, נהוג תחילה לבצע <strong>הפחתת ממד</strong>,
                    ולאחר מכן להציג את הנתונים בדו־ממד או תלת־ממד. נעסוק בשיטות כאלה בפרק 20. </P>
            <H2>
                למידת מסווג (Learning a
                Classifier)
            </H2>
            <IrisDataLoader />
            <P>
                מהתבוננות באיור לעיל, ניתן לראות שהמין Setosa (הצהוב) קל יחסית להבחנה משני המינים האחרים. לכן למשל,
                אפשר ליצור את כלל ההחלטה הבא:
            </P>
            <BlockMathLTR
                math={"f(x; \\theta) = \\begin{cases} \\text{Setosa} & x_{\\text{petal length}} < 2.45 \\\\ \\text{Versicolor or Virginica} & \\text{else} \\end{cases}"} />
            <P>
                זהו מסווג פשוט ביותר, שבו חילקנו את מרחב הקלט לשני אזורים באמצעות סף חד־ממדי — נקודת
                ההפרדה <InlineMathLTR math={'x_{\\text{petal length}} = 2.45'} />. נקודות שמשמאל לסף הזה מסווגות
                כ־Setosa,
                ואלו שמימינו מסווגות כ־Versicolor או Virginica. </P>
            <P>
                נראה שכלל זה מצליח לסווג בצורה מושלמת את
                דוגמאות
                ה־Setosa, אך לא את הדוגמאות של Virginica ו־Versicolor. כדי לשפר את הביצועים, ניתן <strong>לפלח מחדש את
                    המרחב
                    באופן רקורסיבי</strong>, על־ידי פיצול אזורים שבהם המסווג שוגה. לדוגמה, ניתן להוסיף כלל נוסף לדוגמאות
                שנכשלו בכלל הראשון: לבדוק האם רוחב עלי הכותרת (petal width) הוא פחות מ־1.75 ס"מ (במקרה כזה ננבא
                Versicolor),
                או יותר (וננבא Virginica).
            </P>
            <P> אפשר לסדר את הכללים המקוננים האלה בצורה של עץ, שנקרא <strong>עץ החלטה
                (Decision Tree)</strong>, כמו באיור 1.4a. מבנה זה יוצר משטח החלטה דו־ממדי, כפי שמוצג באיור 1.4b.
            </P>
            <P>
                ניתן לייצג את העץ על־ידי שמירת המידע הבא בכל צומת פנימי: איזה מאפיין נבחר, ומהו ערך הסף המתאים לו. את כל
                הפרמטרים האלה נסמן באמצעות <InlineMathLTR math={'\\theta'} />. נלמד כיצד ללמוד את הפרמטרים האלה בפרק
                18.1.
            </P>
        </div>
    )
}