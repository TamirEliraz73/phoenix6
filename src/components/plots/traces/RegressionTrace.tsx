import { LinearRegressionAsLine } from "@/libs/math";
import type { Data } from "plotly.js";

// This is where you would put the logic for your linear regression calculation
// or call your external function.
export function getRegressionTrace(xs: number[], ys: number[]): Data {
    // Assuming LinearRegressionAsLine returns the y-values for the regression line
    const linearRegressionYs: number[] = LinearRegressionAsLine({ xs, ys });

    return {
        x: xs,
        y: linearRegressionYs,
        mode: "lines+markers",
        type: "scatter",
        name: "Linear Regression",
        marker: {
            symbol: 'x',
            color: 'red',
            size: 8
        },
        line: {
            color: 'red'
        }
    };
}