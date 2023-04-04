import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

interface PostGridsProps {
  title: string;
  src: string;
  alt: string;
  srcImg: string;
  altImg: string;
  titleDetail: string;
  details: string;
}

export default function PostGrids({
  title,
  src,
  alt,
  srcImg,
  altImg,
  titleDetail,
  details,
}: PostGridsProps) {
  return (
      <div className="w-[250px] h-[300px] text-white">
        <div
          className="w-[250px] h-[150px]"
          style={{
            background: "rgba(0, 86, 133, 0.6)",
            backgroundBlendMode: "multiply",
          }}
        >
          <h1 className="absolute uppercase z-10 text-sm font-bold p-4">
            {title}
          </h1>
          <h1 className="absolute pt-[120px] px-4">
            <Image src={src} width={40} height={30} alt={alt} />
          </h1>
          <Image
            src={srcImg}
            width={250}
            height={300}
            alt={altImg}
            className=" absolute object-cover bg-cover bg-fixed bg-no-repeat -z-10"
          />
        </div>
        <div className="bg-[#0083CA] hover:bg-gray-800 p-4">
          <Link href={`#`}>
            <h1 className="text-sm font-bold flex flex-wrap items-center justify-between">
              {titleDetail}
              <span>
                <IoIosArrowForward size={20} />
              </span>
            </h1>
          </Link>
          <p className="text-xs my-6">{details}</p>
        </div>
      </div>
  );
}
