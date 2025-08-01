
import Papa from "papaparse";
import dynamic from "next/dynamic";
const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });
import type { Data, Layout } from "plotly.js";
import { useEffect, useState } from "react";
import { kde } from "@/libs/math";

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