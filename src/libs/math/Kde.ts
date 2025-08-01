export default function kde(data: number[], bins = 60): { x: number[]; y: number[] } {
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