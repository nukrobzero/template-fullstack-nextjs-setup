import Image from "next/image";

interface ImagesProps {
    src: string
    width: number
    height: number
    alt: string
}

export default function Images({
    src,
    width,
    height,
    alt
} : ImagesProps) {
    return (
        <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        />
    )
}