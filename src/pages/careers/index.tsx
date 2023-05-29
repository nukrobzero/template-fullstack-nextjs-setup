import Layout from "@/components/frontend/layout/layout";
import Headers from "@/components/headerAllpage";
import Sections from "@/components/layoutpage";
import Link from "next/link";
import { MdOutlineArrowForwardIos } from "react-icons/md";

export default function Careers() {
  return (
    <Layout>
      <Headers title="Careers Page" content="Careers Page" />
      <div className="max-w-full mx-auto">
        <div
          className="h-60 md:h-[350px]"
          style={{
            backgroundImage: `url("https://res.cloudinary.com/sumipol/image/upload/v1685089685/sumipol-web-image/bg-hero-careers_pleeih.webp")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="max-w-screen-xl mx-auto flex flex-col items-start justify-center p-4 h-60 md:h-[350px] text-slate-100">
            <h1 className="xl:text-3xl md:text-2xl sm:text-xl text-lg font-bold">
              Careers
            </h1>
            <p className="my-4 text-base sm:text-sm md:text-lg max-w-screen-sm">
              ธุรกิจของสุมิพลมั่นคงและเติบโตอย่างต่อเนื่อง
              มีโอกาสความก้าวหน้าทางอาชีพ
              และให้ความสำคัญกับสวัสดิการการสร้างวัฒนธรรมองค์กรและสภาพแวดล้อมการทำงานที่ดี
              เพื่อส่งเสริมการทำงานอย่างมีความสุข
            </p>
          </div>
        </div>
      </div>
      <Sections>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-4 justify-center px-4 py-16 border-b border-slate-700 space-y-6 md:space-y-0">
            <div className="space-y-4">
              <span className="bg-[#0083CA] py-2 px-6 text-white text-sm font-semibold cursor-default">
                FULL TIME
              </span>
              <h1 className="text-2xl font-bold">Chief Financial Officer</h1>
            </div>
            <div className="md:col-span-2">
              Eagle ray burma danio trumpeter, wrymouth, tiger barb cornetfish
              tenuis, platyfish Cornish Spaktailed Bream stream catfish
              bluefish, pearl perch. Sand goby sand eel tailor temperate perch
              shark
            </div>
            <div className="flex flex-col justify-center items-start md:items-center">
              <Link
                href={`/careers/#`}
                className="flex flex-row justify-center items-center text-[#0083CA] hover:text-blue-8 font-semibold uppercase"
              >
                more detail
                <span className="pl-4">
                  <MdOutlineArrowForwardIos />
                </span>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 justify-center px-4 py-16 border-b border-slate-700 space-y-6 md:space-y-0">
            <div className="space-y-4">
              <span className="bg-[#0083CA] py-2 px-6 text-white text-sm font-semibold cursor-default">
                FULL TIME
              </span>
              <h1 className="text-2xl font-bold">Chief Financial Officer</h1>
            </div>
            <div className="md:col-span-2">
              Eagle ray burma danio trumpeter, wrymouth, tiger barb cornetfish
              tenuis, platyfish Cornish Spaktailed Bream stream catfish
              bluefish, pearl perch. Sand goby sand eel tailor temperate perch
              shark
            </div>
            <div className="flex flex-col justify-center items-start md:items-center">
              <Link
                href={`/careers/#`}
                className="flex flex-row justify-center items-center text-[#0083CA] hover:text-blue-8 font-semibold uppercase"
              >
                more detail
                <span className="pl-4">
                  <MdOutlineArrowForwardIos />
                </span>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 justify-center px-4 py-16 border-b border-slate-700 space-y-6 md:space-y-0">
            <div className="space-y-4">
              <span className="bg-[#0083CA] py-2 px-6 text-white text-sm font-semibold cursor-default">
                FULL TIME
              </span>
              <h1 className="text-2xl font-bold">Chief Financial Officer</h1>
            </div>
            <div className="md:col-span-2">
              Eagle ray burma danio trumpeter, wrymouth, tiger barb cornetfish
              tenuis, platyfish Cornish Spaktailed Bream stream catfish
              bluefish, pearl perch. Sand goby sand eel tailor temperate perch
              shark
            </div>
            <div className="flex flex-col justify-center items-start md:items-center">
              <Link
                href={`/careers/#`}
                className="flex flex-row justify-center items-center text-[#0083CA] hover:text-blue-8 font-semibold uppercase"
              >
                more detail
                <span className="pl-4">
                  <MdOutlineArrowForwardIos />
                </span>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 justify-center px-4 py-16 border-b border-slate-700 space-y-6 md:space-y-0">
            <div className="space-y-4">
              <span className="bg-[#0083CA] py-2 px-6 text-white text-sm font-semibold cursor-default">
                FULL TIME
              </span>
              <h1 className="text-2xl font-bold">Chief Financial Officer</h1>
            </div>
            <div className="md:col-span-2">
              Eagle ray burma danio trumpeter, wrymouth, tiger barb cornetfish
              tenuis, platyfish Cornish Spaktailed Bream stream catfish
              bluefish, pearl perch. Sand goby sand eel tailor temperate perch
              shark
            </div>
            <div className="flex flex-col justify-center items-start md:items-center">
              <Link
                href={`/careers/#`}
                className="flex flex-row justify-center items-center text-[#0083CA] hover:text-blue-8 font-semibold uppercase"
              >
                more detail
                <span className="pl-4">
                  <MdOutlineArrowForwardIos />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </Sections>
    </Layout>
  );
}
