import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

interface PostGridsProps {
  title: string;
  src: string;
  alt: string;
  titleDetail: string;
  details: string;
}

export default function PostGrids({
  title,
  src,
  alt,
  titleDetail,
  details,
}: PostGridsProps) {
  return (
    <div className="text-white">
      <div
        className="w-[280px] h-[160px]"
        style={{
          background: "rgba(0, 86, 133, 0.6)",
          backgroundBlendMode: "multiply",
        }}
      >
        <h1 className="absolute uppercase z-10 text-sm font-bold p-4 cursor-default">
          {title}
        </h1>
        <div className="absolute pt-[120px] px-4">
          <svg
            width="31"
            height="18"
            viewBox="0 0 31 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.665483 0.545454H5.21662L10.0234 12.2727H10.228L15.0348 0.545454H19.5859V18H16.0064V6.6392H15.8615L11.3445 17.9148H8.90696L4.38991 6.59659H4.24503V18H0.665483V0.545454ZM30.1179 0.545454V18H26.4276V4.04829H26.3253L22.3281 6.55398V3.28125L26.6491 0.545454H30.1179Z"
              fill="white"
              fillOpacity="0.3"
            />
          </svg>
        </div>
        <div className="w-[280px] h-[160px] absolute object-cover bg-cover bg-fixed bg-no-repeat -z-10">
          <Image src={src} width={800} height={300} alt={alt} />
        </div>
      </div>
      <div className="bg-[#0083CA] hover:bg-gray-800 p-4 w-[280px]">
        <Link href={`#`}>
          <h1 className="text-sm font-bold flex flex-wrap items-center justify-between">
            {titleDetail}
            <span>
              <IoIosArrowForward size={20} />
            </span>
          </h1>
          <p className="text-xs my-6">{details}</p>
        </Link>
      </div>
    </div>
  );
}
