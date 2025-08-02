import type { Data, Layout } from "plotly.js";
import PlotWrapper from "./PlotWrapper";

export type ScatterProps = {
    xFrom: number,
    xTo: number,
    ys: number[],
    title?: string | undefined,
    xAxisTitle?: string | undefined,
    yAxisTitle?: string | undefined,
    width?: number | undefined;
    height?: number | undefined;
}

export default function Scatter({ xFrom, xTo, ys, title, xAxisTitle, yAxisTitle, width, height }: ScatterProps) {
    const numPoints = ys.length;
    const step = numPoints > 1 ? (xTo - xFrom) / (numPoints - 1) : 0;
    const xs = Array.from({ length: numPoints }, (_, i) => xFrom + i * step);
    const data: Data = {
        x: xs,
        y: ys,
        mode: "markers",
        type: "scatter"
    };
    const layout: Partial<Layout> = {
        title: { text: title },
        xaxis: {
            title: { text: xAxisTitle ?? "x-axis" },
            showline: false, // מונע הצגה של קו הציר עצמו.
            zeroline: false, // מסיר את הקו המודגש בנקודה 0 של הציר.
            showgrid: true, // מסיר את רשת הקווים שמפרידה בין הערכים השונים.
            dtick: 2.5
        },
        yaxis: {
            title: { text: yAxisTitle ?? "y-axis" },
            showline: false, // מונע הצגה של קו הציר עצמו.
            zeroline: false, // מסיר את הקו המודגש בנקודה 0 של הציר.
            showgrid: true, // מסיר את רשת הקווים שמפרידה בין הערכים השונים.
            dtick: 2.5
        }
    };
    return <PlotWrapper data={[data]} layout={layout} width={width} height={height} />
}