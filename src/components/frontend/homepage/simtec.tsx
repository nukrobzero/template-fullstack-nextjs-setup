import Sections from "@/components/layoutpage";
import Image from "next/image";
import Link from "next/link";

export default function Simtec() {
  return (
    <section className="max-w-full mx-auto">
      <div
        className="lg:h-[350px] flex flex-col justify-center items-center"
        style={{
          backgroundImage: `linear-gradient(90deg, #FFFFFF 50%, rgba(255, 255, 255, 0.616742) 69.31%, rgba(255, 255, 255, 0) 88.61%), url("https://res.cloudinary.com/sumipol/image/upload/v1685076100/sumipol-web-image/bgcover_w8ges3.jpg")`,
          backgroundPosition: "right",
        }}
      >
        <Sections>
          <div className="flex flex-col md:flex-row justify-start items-start space-y-4">
            <div className="container">
              <h1 className="text-xl font-bold text-[#0083CA] pb-4">
                มิติใหม่ของศูนย์เทคนิคแห่งการเรียนรู้
              </h1>
              <p className="text-base text-black">
                สถาบันเทคโนโลยีการผลิตสุมิพล คือ
                ศูนย์เทคนิคแห่งการเรียนรู้ที่เกิดขึ้นภายใต้ความร่วมมือกับองค์กรภาครัฐและเอกชนที่สําคัญ
                14 หน่วยงาน และได้รับการสนับสนุนจากผู้ผลิตเครื่องจักรกล
                เครื่องมืออุปกรณ์ชั้นนําระดับโลก โดยเฉพาะจากประเทศญี่ปุ่น <br />
                <br />
                โดยมีวัตถุประสงค์เพื่อเป็นแหล่งพัฒนาบุคลากรทางด้านทักษะฝีมือแรงงานให้มีความรู้ความเข้าใจในหลักสูตรการผลิตสาขาต่างๆ
                ตรงความ ต้องการของภาคอุตสาหกรรมในยุค 4.0
                สามารถใช้เครื่องจักรกลที่ทันสมัยอย่างมีประสิทธิภาพ
                การฝึกอบรมเน้นการสาธิตและการปฏิบัติ
              </p>
              <Link
                href={`#`}
                className="flex flex-wrap items-center text-[#0083CA] font-semibold py-4"
              >
                Learn more
                <span className="flex flex-col items-center justify-items-center justify-center text-center ml-8 pt-1">
                  <Image
                    src={`https://res.cloudinary.com/sumipol/image/upload/v1685075768/sumipol-web-image/Arrow-1_rcuoqp.webp`}
                    width={50}
                    height={0}
                    alt="arrow"
                  />
                </span>
              </Link>
            </div>
            <div className="container"></div>
          </div>
        </Sections>
      </div>
    </section>
  );
}
