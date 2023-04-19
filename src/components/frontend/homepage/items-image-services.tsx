import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  title: string;
}

export default function ItemsServices({
  src,
  alt,
  title,
}: Props) {
  return (
    <div className="flex flex-col justify-center items-center hover:text-[#0083CA] cursor-pointer">
      <div className="lg:w-[110px] lg:h-[110px]">
      <Image
        src={src}
        width={110}
        height={110}
        alt={alt}
      />
      </div>
      <div className="mt-4 text-center">
        <h3 className="font-bold">{title}</h3>
      </div>
    </div>
  );
}
