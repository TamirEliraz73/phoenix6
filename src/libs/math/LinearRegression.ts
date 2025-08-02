export type LinearRegressionResult = {
    m: number;
    b: number;
}
export function LinearRegressionAsLine({ xs, ys }: { xs: number[], ys: number[] }): number[] {
    const { m, b }: LinearRegressionResult = LinearRegression({ xs, ys })
    return xs.map(x => m * x + b);
}
export default function LinearRegression({ xs, ys }: { xs: number[], ys: number[] }): LinearRegressionResult {
    const numPoints = ys.length;
    // Calculate the sums needed for linear regression
    const sumX = xs.reduce((a, b) => a + b, 0);
    const sumY = ys.reduce((a, b) => a + b, 0);
    const sumXY = xs.reduce((acc, x, i) => acc + x * ys[i], 0);
    const sumX2 = xs.reduce((acc, x) => acc + x * x, 0);

    // Calculate the slope (m) and y-intercept (b)
    const denominator = numPoints * sumX2 - sumX * sumX;
    const m = (numPoints * sumXY - sumX * sumY) / denominator;
    const b = (sumY * sumX2 - sumX * sumXY) / denominator;
    return { m, b };
}