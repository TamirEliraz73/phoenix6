'use client'
import { BlockMathLTR, BulletList, NoteBox } from "@/components/ui/boxes";
import { H3, H4, P } from "@/components/ui/elements";
import { Section } from "@/components/ui/sections";
import { UIdGenerator } from "@/libs/generators";
import type { JSX } from "react";
import { InlineMath } from "react-katex";

export default function MaximumLikelihoodEstimation(): JSX.Element {
    return (<Section SHeader={
        <H3 hasMs={false}>אומדן נראות מירבית (Maximum likelihood estimation)</H3>
    } SInner={<Inner />} />)
}
function Inner(): JSX.Element {
    return (
        <div>
            <H4>טרמינולוגיה</H4>
            <P>
                התרגום המקובל והמדויק ביותר של Maximum Likelihood Estimation לעברית הוא אמידת נראות מקסימלית או אומדן נראות מירבית.
            </P><P>
                המונח "נראות" (Likelihood) בהקשר זה אינו מתייחס ל"סבירות" או "הסתברות" (Probability) במובן היומיומי, אלא למדד מתמטי. הוא מתאר עד כמה הנתונים שנצפו בפועל "מתאימים" או "סבירים" תחת מודל ספציפי ופרמטרים מסוימים.
            </P><P>
                לכן, "אומדן נראות מקסימלית" פירושו מציאת הפרמטרים של המודל שגורמים לנתונים שנצפו להיות הכי סבירים או נראים תחת המודל הזה. במילים אחרות, אנחנו רוצים למצוא את המודל שהכי "מתאים" או "הולם" את הנתונים שלנו.
            </P>
            <NoteBox title="קצת פירוט" type="info">
                <BulletList items={[
                    <span key={UIdGenerator.generate()}><span className="underline">Maximum (מקסימלית)</span> - פירושו שאנחנו מנסים למצוא את הערך של הפרמטרים שממקסם את פונקציית הנראות.</span>,
                    <span key={UIdGenerator.generate()}><span className="underline">Likelihood (נראות)</span> - הוא מושג מפתח. הוא מודד את ההתאמה של המודל לנתונים, בניגוד ל"הסתברות" שמודדת את הסיכוי להתרחשות אירוע מסוים.</span>,
                    <span key={UIdGenerator.generate()}><span className="underline">Estimator (אומדן/אומד)</span> - היא שיטה או כלל מתמטי לחישוב ערך לא ידוע (כמו פרמטרים של מודל) מתוך הנתונים.</span>,
                ]} /></NoteBox>
            <P>
                בעת התאמת מודלים הסתברותיים, נהוג להשתמש ב־לוג־לוס שלילי (Negative Log Probability) בתור פונקציית ההפסד:
            </P><BlockMathLTR math={'l(y, f(x; \\theta)) = -log(p(y | f(x; \\theta)))'} />
            <P>
                ההיגיון מאחורי בחירה זו (המוסבר בפירוט בפרקים מאוחרים יותר) הוא שמודל טוב - כלומר כזה עם הפסד נמוך - הוא מודל שמקצה הסתברות גבוהה לפלט האמיתי <InlineMath math={'y'} /> עבור כל קלט <InlineMath math={'x'} />.

                ממוצע הלוג־לוס השלילי על פני קבוצת האימון נקרא Negative Log Likelihood:
            </P>
            <BlockMathLTR math={'\\text{NLL}(\\theta) = -\\frac{1}{N} \\sum_{n=1}^N log(p(y_n | f(x_n;\\theta)))'} />
            <P>
                (Negative Log Likelihood)

                כאשר אנו ממזערים את פונקציה זו, אנו מקבלים את אומדן מקסימום סבירות:
            </P>
            <BlockMathLTR math={'\\tilde{\\theta}_\\text{mle} = \\underset{\\theta}{\\text{argmin }}\\text{NLL}(\\theta)'} />
            <P>
                שיטה זו היא אחת הדרכים הנפוצות ביותר להתאים מודלים לנתונים, כפי שנראה בהמשך.
            </P>
        </div>
    )
}