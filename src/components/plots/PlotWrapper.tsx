import dynamic from "next/dynamic";
import type { Data, Layout } from "plotly.js";

const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

export type PlotWrapperProps = {
    data: Data[];
    layout: Partial<Layout>;
    width?: number;
    height?: number;
};

export default function PlotWrapper({ data, layout, width, height }: PlotWrapperProps) {
    if (width) layout.width = width;
    if (height) layout.height = height;
    return <Plot data={data} layout={layout} />;
}