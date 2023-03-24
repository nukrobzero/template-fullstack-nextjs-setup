import Image from "next/image";

interface Props {
  src: string;
  width: number;
  height: number;
  alt: string;
  title: string;
}

export default function ItemsServices({
  src,
  width,
  height,
  alt,
  title,
}: Props) {
  return (
    <div className=" items-center">
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        className=" h-20 w-20"
      />
      <div className="mt-4">
        <h3 className="font-bold">{title}</h3>
      </div>
    </div>
  );
}
