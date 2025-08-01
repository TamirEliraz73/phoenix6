'use client'
import { H2, P } from "@/components/ui/elements";
import { BlockMathLTR, InlineMathLTR } from "@/components/ui/boxes";
import Classification from "./Classification";
import Regression from "./Regression";

export default function MachineLearning2() {
    return <div className="font-sans mx-10 mt-10 text-white">
        <H2>למידה מפוקחת</H2>
        <P>
            הצורה הנפוצה ביותר של למידת מכונה היא <b>למידה מפוקחת</b>. במשימה זו, <InlineMathLTR math={'T'} /> היא
            למידת פונקציה <InlineMathLTR math={'f'} /> שמעבירה קלטים <InlineMathLTR
                math={'x \\in \\mathcal{X}'} /> לפלטים <InlineMathLTR math={'y \\in \\mathcal{Y}'} />.
            הקלטים <InlineMathLTR math={'x'} /> נקראים גם תכונות (<i>features</i>), קו־וריאטים (<i>covariates</i>) או
            משתנים מסבירים (<i>predictors</i>);
            בדרך כלל מדובר בוקטור ממדי קבוע של מספרים, למשל הגובה והמשקל של אדם, או הפיקסלים בתמונה.
            במקרים כאלו, <InlineMathLTR math={'\\mathcal{X} = \\mathbb{R}^D'} /> כאשר <InlineMathLTR math={'D'} /> הוא
            מספר התכונות (הממדים של הקלט). הפלט <InlineMathLTR math={'y'} /> נקרא גם תגית (<i>label</i>), מטרה
            (<i>target</i>) או תגובה (<i>response</i>).
        </P>
        <P>
            הניסיון <InlineMathLTR math={'E'} /> מתקבל בצורת קבוצת אימון שכוללת זוגות קלט-פלט:
        </P>
        <BlockMathLTR math={'\\mathcal{D} = \\{(x_n, y_n)\\}_{n=1}^N'} />

        <P>
            כאשר <InlineMathLTR math={'N'} /> הוא גודל המדגם. מדד הביצועים <InlineMathLTR math={'P'} /> תלוי בסוג הפלט
            שאנחנו מנסים לחזות, כפי שנראה בהמשך.
        </P>

        <Classification />

        <Regression />
    </div >
}