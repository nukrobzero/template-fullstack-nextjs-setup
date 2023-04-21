import Sections from "@/components/layoutpage";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const NewsHome: NextPage = () => {
  return (
    <div className="bg-[#F4F4F4]">
      <Sections>
        <div className="w-full flex flex-col justify-center text-center pt-12 mx-auto">
          <div className="flex flex-row justify-between">
            <h1 className="text-2xl md:text-3xl font-bold">
              News & <span className="text-[#0083CA]">Activities</span>
            </h1>
            <Link
              href={`#`}
              className="border border-[#0083CA] px-16 py-3 text-[#0083CA] font-bold hover:text-white hover:bg-[#003F73]"
            >
              View all
            </Link>
          </div>
          <div className="flex xl:flex-row flex-col justify-between items-center md:space-x-4">
            <div className="flex-col justify-center space-y-6 hidden md:flex">
              <div className="flex flex-row justify-center items-center space-x-2">
                <div className="flex flex-row justify-center items-center">
                  <Image
                    src={`/home/news/News-Highlight.jpg`}
                    width={800}
                    height={400}
                    alt="news1"
                    className="h-full w-full"
                  />
                </div>
                <div className="flex flex-col justify-start space-y-2 text-start">
                  <span className="text-[#0083CA] font-semibold text-sm">
                    MAR 15, 2023
                  </span>
                  <h1 className="text-base font-bold">
                    SIMTEC ร่วมจัดฝึกอบรมหลักสูตร
                    “วัสดุศาสตร์เพื่อการผลิตสมัยใหม่”
                  </h1>
                  <p className="text-xs">
                    เมื่อวันที่ 28 มีนาคม 2566 ดร.สมชาย ธำรงสุข
                    ผู้อำนวยการสถาบันการอาชีวศึกษาภาคตะวันออก
                    เป็นประธานเปิดการฝึกอบรมหลักสูตร
                    “วัสดุศาสตร์เพื่อการผลิตสมัยใหม่” ภายใต้โครงการความร่วมมือ
                    การฝึกอบรมและพัฒนาครูอาชีวศึกษา
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-center items-center space-x-2">
                <div className="flex flex-row justify-center items-center">
                  <Image
                    src={`/home/news/News-Highlight.jpg`}
                    width={800}
                    height={400}
                    alt="news1"
                    className="h-full w-full"
                  />
                </div>
                <div className="flex flex-col justify-start space-y-2 text-start">
                  <span className="text-[#0083CA] font-semibold text-sm">
                    MAR 15, 2023
                  </span>
                  <h1 className="text-base font-bold">
                    SIMTEC ร่วมจัดฝึกอบรมหลักสูตร
                    “วัสดุศาสตร์เพื่อการผลิตสมัยใหม่”
                  </h1>
                  <p className="text-xs">
                    เมื่อวันที่ 28 มีนาคม 2566 ดร.สมชาย ธำรงสุข
                    ผู้อำนวยการสถาบันการอาชีวศึกษาภาคตะวันออก
                    เป็นประธานเปิดการฝึกอบรมหลักสูตร
                    “วัสดุศาสตร์เพื่อการผลิตสมัยใหม่” ภายใต้โครงการความร่วมมือ
                    การฝึกอบรมและพัฒนาครูอาชีวศึกษา
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-center items-center space-x-2">
                <div className="flex flex-row justify-center items-center">
                  <Image
                    src={`/home/news/News-Highlight.jpg`}
                    width={800}
                    height={400}
                    alt="news1"
                    className="h-full w-full"
                  />
                </div>
                <div className="flex flex-col justify-start space-y-2 text-start">
                  <span className="text-[#0083CA] font-semibold text-sm">
                    MAR 15, 2023
                  </span>
                  <h1 className="text-base font-bold">
                    SIMTEC ร่วมจัดฝึกอบรมหลักสูตร
                    “วัสดุศาสตร์เพื่อการผลิตสมัยใหม่”
                  </h1>
                  <p className="text-xs">
                    เมื่อวันที่ 28 มีนาคม 2566 ดร.สมชาย ธำรงสุข
                    ผู้อำนวยการสถาบันการอาชีวศึกษาภาคตะวันออก
                    เป็นประธานเปิดการฝึกอบรมหลักสูตร
                    “วัสดุศาสตร์เพื่อการผลิตสมัยใหม่” ภายใต้โครงการความร่วมมือ
                    การฝึกอบรมและพัฒนาครูอาชีวศึกษา
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center shadow-2xl my-8 md:!max-w-392px">
              <div className="object-cover md:w-[392px] md:h-[305px]">
                <Image
                  src={`/home/news/News-Highlight.jpg`}
                  width={800}
                  height={400}
                  alt="news1"
                />
              </div>
              <div className="md:w-[392px] p-6 text-start space-y-2 bg-[#404040] text-white">
                <span className="text-[#0083CA] font-semibold text-sm">
                  MAR 15, 2023
                </span>
                <h1 className="text-base font-bold">
                  SIMTEC ร่วมจัดฝึกอบรมหลักสูตร
                  “วัสดุศาสตร์เพื่อการผลิตสมัยใหม่”
                </h1>
                <p className="text-xs">
                  เมื่อวันที่ 28 มีนาคม 2566 ดร.สมชาย ธำรงสุข
                  ผู้อำนวยการสถาบันการอาชีวศึกษาภาคตะวันออก
                  เป็นประธานเปิดการฝึกอบรมหลักสูตร
                  “วัสดุศาสตร์เพื่อการผลิตสมัยใหม่” ภายใต้โครงการความร่วมมือ
                  การฝึกอบรมและพัฒนาครูอาชีวศึกษา
                </p>
              </div>
            </div>
          </div>
        </div>
      </Sections>
    </div>
  );
};

export default NewsHome;
