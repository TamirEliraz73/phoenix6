import type { Data } from "plotly.js";

export function getScatterTrace(xs: number[], ys: number[]): Data {
    return {
        x: xs,
        y: ys,
        mode: "markers",
        type: "scatter",
        name: "Data Points"
    };
}