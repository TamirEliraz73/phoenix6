import { BlockMathLTR, BulletList, InlineMathLTR } from "@/components/ui/boxes"
import { H3, P } from "@/components/ui/elements"
import { Section } from "@/components/ui/sections"
import { UIdGenerator } from "@/libs/generators"
import type { JSX } from "react"

export default function DeepNeuralNetworks(): JSX.Element {
    return (<Section SHeader={
        <H3 hasMs={false}>רשתות נוירונים עמוקות (Deep Neural Networks - DNN)</H3>
    } SInner={<Inner />} />)
}
function Inner(): JSX.Element {
    return <div>
        <P>
            בסעיף הקודם ראינו איך בחרנו ידנית את הטרנספורמציה של מאפייני הקלט - למשל, הרחבה פולינומית מהצורה:
        </P>
        <BlockMathLTR math={'\\phi(x) = [1, x_1, x_2, (x_1)^2, (x_2)^2, \\dots]'} />
        <P>
            אבל אפשר לבנות מודלים חזקים בהרבה אם נלמד לבצע את חילוץ המאפיינים הלא־ליניארי הזה באופן אוטומטי.
            לשם כך, נניח שלפונקציית המאפיינים <InlineMathLTR math={'\\phi(x)'} /> יש סט פרמטרים משל עצמה, נסמנו אותו <InlineMathLTR math={'V'} />.
            כעת, המודל כולו נראה כך:
        </P>
        <BlockMathLTR math={'f(x; w, V) = w^\\intercal \\cdot \\phi(x; V)'} />
        <P>
            ניתן לפרק את <InlineMathLTR math={'\\phi(x; V)'} /> רקורסיבית להרכב של פונקציות פשוטות יותר.
            כך מתקבל מודל שהוא בעצם מחסנית של <InlineMathLTR math={'L'} /> פונקציות מקוננות (layers):
        </P>
        <BlockMathLTR math={'f(x; \\theta) = f_L(f_{L-1}(\\dots (f_1(x)) \\dots ))'} />
        <P>
            כאשר <InlineMathLTR math={'f_l(x)=f(x;\\theta_l)'} /> היא הפונקציה בשכבה ה־<InlineMathLTR math={'l'} />.
            השכבה האחרונה היא ליניארית:
        </P>
        <BlockMathLTR math={'f_L(x) = (w_L)^\\intercal \\cdot x'} />
        <P>
            ולכן:
        </P>
        <BlockMathLTR math={'f(x; \\theta) = (w_L)^\\intercal \\cdot f_{1:L-1}(x)'} />
        <P>
            כאשר:
        </P>
        <BlockMathLTR math={'f_{1:L-1}(x) = f_{L-1}( \\dots (f_1(x)) \\dots ) '} />
        <P>
            הוא ה"חילוץ המובנה של מאפיינים" שהרשת למדה בעצמה (the learned feature extractor).

            זהו הרעיון המרכזי מאחורי רשתות נוירונים עמוקות (DNNs),
            שכוללות גם וריאציות נפוצות כמו:
        </P>
        <BulletList items={[
            <span key={UIdGenerator.generate()}> רשתות קונבולוציה (CNNs) - לעיבוד תמונה</span>,
            <span key={UIdGenerator.generate()}> רשתות חוזרות (RNNs) - לעיבוד רצפים</span>
        ]} />
    </div>
}