import BaseImage from "./BaseImage";
export default function Flag({ flagUrl, alt, width = 20, height = 20, className = '', draggable = false }:
    { flagUrl: string, alt: string, width?: number, height?: number, className?: string, draggable?: boolean }) {
    return (
        <BaseImage
            width={width}
            height={height}
            src={`https://www.flagcolorcodes.com/data/${flagUrl}.png`}
            alt={alt}
            className={className}
            draggable={draggable}
        />
    )
}