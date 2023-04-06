import Sections from "@/components/layoutpage";
import Image from "next/image";
import Link from "next/link";

export default function Simtec() {
  return (
    <div
      className="max-w-[1920px] mx-auto"
      style={{
        backgroundImage: `linear-gradient(
          90deg,
          #ffffff 50%,
          rgba(255, 255, 255, 0.616742) 64.28%,
          rgba(255, 255, 255, 0) 88.61%
        )`,
        backgroundBlendMode: "multiply",
      }}
    >
      <Sections>
        <div className="flex xl:flex-row flex-col justify-center items-center xl:h-[350px] xl:ml-[100px]">
          <div className="container flex flex-col justify-center">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-2xl text-[#0083CA] font-bold py-4">
                มิติใหม่ของศูนย์เทคนิคแห่งการเรียนรู้
              </h1>
              <p>
                สถาบันเทคโนโลยีการผลิตสุมิพล คือ
                ศูนย์เทคนิคแห่งการเรียนรู้ที่เกิดขึ้นภายใต้ความร่วมมือกับองค์กรภาครัฐและเอกชนที่สําคัญ
                14 หน่วยงาน และได้รับการสนับสนุนจากผู้ผลิตเครื่องจักรกล
                เครื่องมืออุปกรณ์ชั้นนําระดับโลก โดยเฉพาะจากประเทศญี่ปุ่น
                โดยมีวัตถุประสงค์เพื่อเป็นแหล่งพัฒนาบุคลากรทางด้านทักษะฝีมือแรงงานให้มีความรู้ความเข้าใจในหลักสูตรการผลิตสาขาต่างๆ
                ตรงความ ต้องการของภาคอุตสาหกรรมในยุค 4.0
                สามารถใช้เครื่องจักรกลที่ทันสมัยอย่างมีประสิทธิภาพ
                การฝึกอบรมเน้นการสาธิตและการปฏิบัติ
              </p>
            </div>
            <div className="py-4">
              <Link
                href={`#`}
                className="flex flex-wrap items-center text-[#0083CA] my-8"
              >
                Learn more{" "}
                <span className="flex flex-col items-center justify-items-center justify-center text-center ml-8 pt-1">
                  <Image
                    src={`/home/products/Arrow-1.png`}
                    width={50}
                    height={0}
                    alt="arrow"
                  />
                </span>
              </Link>
            </div>
          </div>
          <div className="container flex flex-col justify-center items-center">
            <div className="xl:absolute -z-10 object-cover bg-fixed">
              <Image
                src={`/home/simtec/bgcover.jpg`}
                width={1920}
                height={1080}
                alt="simtecImg"
              />
            </div>
          </div>
        </div>
      </Sections>
    </div>
  );
}
