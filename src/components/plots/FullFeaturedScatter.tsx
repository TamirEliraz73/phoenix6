import { PlotWrapper } from ".";
import { getScatterTrace, getRegressionTrace, getResidualTrace } from "./traces";
import type { Data, Layout } from "plotly.js";

import { LinearRegressionAsLine } from "@/libs/math"; // Your external function
import { he } from "date-fns/locale";

export type FullFeaturedScatterProps = {
    xFrom: number,
    xTo: number,
    ys: number[],
    title?: string | undefined,
    xAxisTitle?: string | undefined,
    yAxisTitle?: string | undefined,
    width?: number | undefined
    height?: number | undefined;
    showLegend?: boolean | undefined;
}

export default function FullFeaturedScatter({ xFrom, xTo, ys, title, xAxisTitle, yAxisTitle, width, height, showLegend = true }: FullFeaturedScatterProps) {
    const numPoints = ys.length;
    const step = numPoints > 1 ? (xTo - xFrom) / (numPoints - 1) : 0;
    const xs = Array.from({ length: numPoints }, (_, i) => xFrom + i * step);

    // Calculate all data needed for the traces
    const linearRegressionYs: number[] = LinearRegressionAsLine({ xs, ys });

    const data: Data[] = [
        getScatterTrace(xs, ys),
        getRegressionTrace(xs, ys), // Note: getRegressionTrace needs to calculate this itself, or accept it as a prop
        getResidualTrace(xs, ys, linearRegressionYs)
    ];

    const layout: Partial<Layout> = {
        title: { text: title },
        xaxis: {
            title: { text: xAxisTitle ?? "x-axis" },
            showline: false,
            zeroline: false,
            showgrid: true,
            dtick: 2.5
        },
        yaxis: {
            title: { text: yAxisTitle ?? "y-axis" },
            showline: false,
            zeroline: false,
            showgrid: true,
            dtick: 2.5
        },
        showlegend: showLegend
    };

    return <PlotWrapper data={data} layout={layout} width={width} height={height} />;
}