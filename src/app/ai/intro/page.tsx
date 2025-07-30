import 'katex/dist/katex.min.css';
import { H2, P } from "@/components/ui/elements";
import { BulletList, InlineMathLTR, NoteBox } from '@/components/ui/boxes';

export default function MachineLearning1() {
    return (
        <div className="font-sans mx-10 mt-10 text-white">
            <H2>מהי למידת מכונה?</H2>

            <P>
                הגדרה פופולרית של למידת מכונה (Machine Learning או ML), שנוסחה על ידי טום מיטשל, היא:
            </P>
            <NoteBox type="info">
                תוכנית מחשב נחשבת ל“לומדת” מתוך ניסיון <InlineMathLTR math={'E'} /> ביחס למחלקת משימות <InlineMathLTR
                    math={'T'} /> ומדד ביצוע <InlineMathLTR math={'P'} />, אם רמת הביצוע שלה במשימות מתוך <InlineMathLTR
                    math={'T'} /> – כפי שנמדדת על ידי <InlineMathLTR math={'P'} /> – משתפרת עם הניסיון <InlineMathLTR
                    math={'E'} />.
            </NoteBox>

            <P>
                מכאן שיש סוגים רבים של למידת מכונה, בהתאם לאופי המשימות <InlineMathLTR math={'T'} /> שאנו רוצים שהמערכת
                תלמד, למדד הביצוע <InlineMathLTR math={'P'} /> שבו נשתמש כדי להעריך את ביצועיה, ולאות האימון או חוויית
                הלמידה <InlineMathLTR math={'E'} /> שנעביר לה.
            </P>

            <P>
                בקורס זה נעסוק בסוגים הנפוצים ביותר של למידת מכונה — אך מנקודת מבט הסתברותית. באופן גס, משמעות הדבר היא
                שנתייחס לכל גודל שאיננו יודעים מראש (למשל, תחזית לערך עתידי של משתנה מסוים כמו טמפרטורת מחר, או פרמטרים
                של מודל) כאל משתנה מקרי שמתואר באמצעות התפלגות הסתברות. התפלגות זו מייצגת אוסף אפשרי של ערכים שהמשתנה
                עשוי לקבל, יחד עם מידת האמון או המשקל שניתן לכל ערך.
            </P>

            <P>
                ישנן שתי סיבות עיקריות שבגללן אנו בוחרים בגישה הסתברותית:
            </P>

            <BulletList items={[
                <>היא הדרך האופטימלית לקבלת החלטות בתנאי אי־ודאות.</>,
                <>המידול ההסתברותי הוא “השפה” של מרבית תחומי המדע וההנדסה, ולכן מהווה מסגרת מאחדת בין תחומים אלו.</>
            ]} />
        </div>
    )
}