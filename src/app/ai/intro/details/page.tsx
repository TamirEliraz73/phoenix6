'use client'
import { H2, H3, H4, P } from "@/components/ui/elements";
import { BlockMathLTR, InlineMathLTR, NoteBox } from "@/components/ui/boxes";
import { UIdGenerator } from "@/libs/generators";
import Papa from "papaparse";
// import Plot from "react-plotly.js";
import type { Data, Layout } from "plotly.js";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Examples, DataTable } from "@/components/ui/tables-like";
const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

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

        <H3>בעיות סיווג (Classification)</H3>

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
}







type IrisDatum = {
    sl: number;  // SepalLengthCm
    sw: number;  // SepalWidthCm
    pl: number;  // PetalLengthCm
    pw: number;  // PetalWidthCm
    label: string; // Species, נקבל כמו "Iris-setosa"
};

export function IrisDataLoader() {
    const [data, setData] = useState<IrisDatum[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/IrisData.csv")
            .then((res) => res.text())
            .then((csvText) => {
                const parsed = Papa.parse(csvText, {
                    header: true,
                    dynamicTyping: true,
                    skipEmptyLines: true,
                });

                const rawData = parsed.data as any[];

                // המרה למבנה IrisDatum
                const irisData: IrisDatum[] = rawData.map((row) => ({
                    sl: row["SepalLengthCm"],
                    sw: row["SepalWidthCm"],
                    pl: row["PetalLengthCm"],
                    pw: row["PetalWidthCm"],
                    label: (row["Species"] as string).toLowerCase().replace("iris-", ""),
                }));

                setData(irisData);
                setLoading(false);
            });
    }, []);

    if (loading) return <div>טוען נתונים...</div>;

    return <PairPlot data={data} />;
}

const colors: Record<string, string> = {
    setosa: "yellow",
    versicolor: "green",
    virginica: "purple",
};

const numericKeys = ["sl", "sw", "pl", "pw"] as const;
type NumericKey = typeof numericKeys[number];

const featureNames: Record<NumericKey, string> = {
    sl: "Sepal Length",
    sw: "Sepal Width",
    pl: "Petal Length",
    pw: "Petal Width",
};

function kde(data: number[], bins = 60): { x: number[]; y: number[] } {
    const min = Math.min(...data);
    const max = Math.max(...data);
    const step = (max - min) / bins;
    const bandwidth = 0.3 * (max - min);

    const kernel = (x: number, xi: number) =>
        Math.exp(-0.5 * ((x - xi) / bandwidth) ** 2) / (bandwidth * Math.sqrt(2 * Math.PI));

    const x = Array.from({ length: bins }, (_, i) => min + i * step);
    const y = x.map((xi) => data.reduce((sum, xj) => sum + kernel(xi, xj), 0) / data.length);

    return { x, y };
}

type Props = {
    data: IrisDatum[];
};

export function PairPlot({ data }: Props) {
    const size = numericKeys.length;

    // פונקציה ליצירת layout עם תחומי domain מדויקים ל-4x4
    const generateLayout = (): Partial<Layout> => {
        const layout: Partial<Layout> = {
            paper_bgcolor: "#000080",
            plot_bgcolor: "#000080",
            showlegend: false,
            margin: { l: 10, r: 10, b: 10, t: 10 },
            grid: { rows: size, columns: size, pattern: "independent" }, // לא חובה, אבל לשמור
        };

        const gap = 0.02; // רווח קטן בין התאים
        const cellSize = (1 - gap * (size - 1)) / size;

        for (let row = 0; row < size; row++) {
            for (let col = 0; col < size; col++) {
                const index = row * size + col + 1;
                const xStart = col * (cellSize + gap);
                const yEnd = 1 - row * (cellSize + gap);

                layout[`xaxis${index}`] = {
                    domain: [xStart, xStart + cellSize],
                    showgrid: false,
                    zeroline: false,
                    showticklabels: row === size - 1,
                    color: "white",
                    title: row === col ? featureNames[numericKeys[col]] : undefined,
                    titlefont: { color: "white", size: 12 },
                    tickfont: { color: "white", size: 10 },
                };

                layout[`yaxis${index}`] = {
                    domain: [yEnd - cellSize, yEnd],
                    showgrid: false,
                    zeroline: false,
                    showticklabels: col === 0,
                    color: "white",
                    title: row === col ? featureNames[numericKeys[row]] : undefined,
                    titlefont: { color: "white", size: 12 },
                    tickfont: { color: "white", size: 10 },
                    automargin: true,
                };
            }
        }

        return layout;
    };

    const layout = generateLayout();

    const traces: Partial<Data>[] = [];

    for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
            const index = row * size + col + 1;
            const isDiagonal = row === col;
            const rowFeature = numericKeys[row];
            const colFeature = numericKeys[col];

            if (isDiagonal) {
                const grouped: Record<string, IrisDatum[]> = {};
                data.forEach((d) => {
                    if (!grouped[d.label]) grouped[d.label] = [];
                    grouped[d.label].push(d);
                });

                for (const label in grouped) {
                    const values = grouped[label].map((d) => d[rowFeature]);
                    const { x, y } = kde(values);
                    traces.push({
                        x,
                        y,
                        type: "scatter",
                        mode: "lines",
                        fill: "tozeroy",
                        line: { color: colors[label] || "white", shape: "spline" },
                        xaxis: `x${index}`,
                        yaxis: `y${index}`,
                        showlegend: false,
                        ygap: 20,
                        xgap: 20,
                        hoverinfo: "skip",
                    });
                }
            } else {
                const grouped: Record<string, IrisDatum[]> = {};
                data.forEach((d) => {
                    if (!grouped[d.label]) grouped[d.label] = [];
                    grouped[d.label].push(d);
                });

                for (const label in grouped) {
                    const filtered = grouped[label];
                    traces.push({
                        x: filtered.map((d) => d[colFeature]),
                        y: filtered.map((d) => d[rowFeature]),
                        type: "scatter",
                        mode: "markers",
                        marker: { color: colors[label] || "white", size: 6 },
                        xaxis: `x${index}`,
                        yaxis: `y${index}`,
                        ygap: 20,
                        xgap: 20,
                        showlegend: false,
                        hoverinfo: "skip",
                    });
                }
            }
        }
    }

    return (
        <div className={'px-24'}>
            {/*<div style={{maxWidth: 900, margin: "auto"}}>*/}
            <Plot data={traces} layout={layout} config={{ displayModeBar: false }} />
            {/*</div>*/}
        </div>
    );
}