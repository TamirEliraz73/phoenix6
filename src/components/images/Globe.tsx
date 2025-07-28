import { BaseImage } from ".";
export default function Glob({ alt, width = 20, height = 20, className = '', draggable = false }:
    { alt: string, width?: number, height?: number, className?: string, draggable?: boolean }) {
    return (
        <BaseImage
            width={width}
            height={height}
            alt={alt}
            src="https://cdn-icons-png.flaticon.com/512/3898/3898082.png"
            className={className}
            draggable={draggable}
        />
    )
}