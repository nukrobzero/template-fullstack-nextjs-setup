import Sections from "@/components/layoutpage";
import Image from "next/image";
import Link from "next/link";

export default function Simtec() {
  return (
    <div className="xl:max-w-[1920px] md:max-w-screen-md sm:max-w-screen-sm mx-auto flex flex-row justify-center items-center xl:p-0 p-4">
      <div
        className="flex xl:flex-row flex-col justify-center items-center bg-gradient-to-r from-white via-white to-white
"
      >
        <div className="flex flex-col justify-center items-start">
          <h1 className="text-xl font-bold text-center text-[#0083CA] pb-4">
            มิติใหม่ของศูนย์เทคนิคแห่งการเรียนรู้
          </h1>
          <p className="text-base text-gray-700">
            สถาบันเทคโนโลยีการผลิตสุมิพล คือ
            ศูนย์เทคนิคแห่งการเรียนรู้ที่เกิดขึ้นภายใต้ความร่วมมือกับองค์กรภาครัฐและเอกชนที่สําคัญ
            14 หน่วยงาน และได้รับการสนับสนุนจากผู้ผลิตเครื่องจักรกล
            เครื่องมืออุปกรณ์ชั้นนําระดับโลก โดยเฉพาะจากประเทศญี่ปุ่น <br />
            โดยมีวัตถุประสงค์เพื่อเป็นแหล่งพัฒนาบุคลากรทางด้านทักษะฝีมือแรงงานให้มีความรู้ความเข้าใจในหลักสูตรการผลิตสาขาต่างๆ
            ตรงความ ต้องการของภาคอุตสาหกรรมในยุค 4.0
            สามารถใช้เครื่องจักรกลที่ทันสมัยอย่างมีประสิทธิภาพ
            การฝึกอบรมเน้นการสาธิตและการปฏิบัติ
          </p>
        </div>
        <Image
          src="/home/simtec/bgcover.jpg"
          width={714}
          height={350}
          alt="test"
        />
      </div>
    </div>
  );
}
