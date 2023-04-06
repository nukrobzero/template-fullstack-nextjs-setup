import Sections from "@/components/layoutpage";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const NewsHome: NextPage = () => {
  return (
    <div className="bg-[#F4F4F4]">
      <Sections>
        <div className="flex flex-col justify-center text-center xl:px-24">
          <div className="flex flex-row justify-between">
            <h1 className="text-3xl font-bold">
              News & <span className="text-[#0083CA]">Activities</span>
            </h1>
            <Link
              href={`#`}
              className="border border-[#0083CA] px-16 py-3 text-[#0083CA] font-bold hover:text-white hover:bg-[#003F73]"
            >
              View all
            </Link>
          </div>
          <div className="flex xl:flex-row flex-col justify-center items-center">
            <div className="flex flex-row justify-center items-center">
              <div className="w-[180px] h-[140px] flex flex-row justify-center items-center mr-8">
                <Image
                  src={`/home/news/new1.jpeg`}
                  width={800}
                  height={400}
                  alt="news1"
                />
              </div>
              <div className="flex flex-col justify-center items-start">
                <h1 className="text-color1 font-bold">MAR 15, 2023</h1>
                <h1 className="text-base font-bold my-2">
                  SIMTEC ร่วมจัดฝึกอบรมหลักสูตร
                  “วัสดุศาสตร์เพื่อการผลิตสมัยใหม่”
                </h1>
                <p className="text-sm">
                  เมื่อวันที่ 28 มีนาคม 2566 ดร.สมชาย ธำรงสุข
                  ผู้อำนวยการสถาบันการอาชีวศึกษาภาคตะวันออก
                  เป็นประธานเปิดการฝึกอบรมหลักสูตร
                  “วัสดุศาสตร์เพื่อการผลิตสมัยใหม่” ภายใต้โครงการความร่วมมือ
                  การฝึกอบรมและพัฒนาครูอาชีวศึกษา
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center shadow-2xl my-8">
              <div className="object-cover">
                <Image
                  src={`/home/news/new1.jpeg`}
                  width={800}
                  height={400}
                  alt="news1"
                />
              </div>
              <div className="flex flex-col justify-center items-start text-start p-4">
                <h1 className="text-color1 font-bold text-sm">MAR 15, 2023</h1>
                <h1 className="text-sm font-bold my-2">
                  SIMTEC ร่วมจัดฝึกอบรมหลักสูตร
                  “วัสดุศาสตร์เพื่อการผลิตสมัยใหม่”
                </h1>
                <p className="truncate text-sm w-[180px]">
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
