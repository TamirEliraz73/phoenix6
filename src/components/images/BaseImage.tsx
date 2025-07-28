import Image from "next/image";
export type BaseImageProps = { alt: string, src: string, width?: number, height?: number, className?: string, draggable?: boolean }
export default function BaseImage({ alt, src, width = 20, height = 20, className = '', draggable = false }: BaseImageProps) {
    return (
        <Image
            width={width}
            height={height}
            alt={alt}
            src={src}
            className={className}
            draggable={draggable}
        />
    )
}