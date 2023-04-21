import Image from "next/image";
import Link from "next/link";

interface BlogGridProps {
  src: string;
  alt: string;
  category: string;
  url: string;
  details: string;
}

export default function BlogGrid({
  src,
  alt,
  category,
  url,
  details,
}: BlogGridProps) {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="">
        <Image src={src} width={325} height={230} alt={alt} 
        className="lg:w-[380px] md:w-[280px]"
        />
      </div>
      <div className="flex flex-col justify-center w-[260px] md:w-[200px] lg:w-[260px] h-[100] bg-white shadow-xl z-10 -mt-8 p-4">
        <h1 className="flex flex-row items-center text-[#0083CA] text-xs font-bold cursor-default">
          <svg
            width="14"
            height="14"
            viewBox="0 0 10 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-1"
          >
            <rect y="3" width="6" height="6" fill="#0083CA" />
            <rect x="4" width="6" height="6" fill="#D9D9D9" />
          </svg>
          {category}
        </h1>
        <Link href={url} className="font-bold mt-2 hover:underline">
          {details}
        </Link>
      </div>
    </div>
  );
}
