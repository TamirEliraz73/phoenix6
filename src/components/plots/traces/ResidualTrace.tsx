import type { Data } from "plotly.js";

export function getResidualTrace(xs: number[], originalYs: number[], regressionYs: number[]): Data {
    const residualLinesXs: (number | null)[] = [];
    const residualLinesYs: (number | null)[] = [];

    xs.forEach((x, i) => {
        residualLinesXs.push(x, x, null);
        residualLinesYs.push(originalYs[i], regressionYs[i], null);
    });

    return {
        x: residualLinesXs,
        y: residualLinesYs,
        mode: "lines",
        type: "scatter",
        name: "Residuals",
        showlegend: false,
        line: {
            color: 'gray',
            width: 1,
            dash: 'dot'
        }
    };
}