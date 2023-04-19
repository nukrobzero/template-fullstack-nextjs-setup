import Sections from "@/components/layoutpage";
import Image from "next/image";
import Link from "next/link";
import PostGrids from "./products/products-grid";

export default function Products() {
  return (
    <div className="max-w-[1920px] mx-auto">
      <div className="bg-[#FAF8F8] flex flex-wrap absolute w-full max-w-4xl md:w-[750px] h-64 md:h-[24rem] -z-10"></div>
      <Sections>
        <div className="flex md:flex-row flex-col justify-between md:space-x-32 space-x-none space-y-4 md:space-y-none py-8">
          <div className="flex flex-col items-start justify-start w-full">
            <div className="flex lg:flex-row flex-col justify-center">
              <div className="flex flex-col justify-center items-start">
                <h1 className="uppercase text-sm font-bold text-[#0083CA]">
                  PRODUCTS
                </h1>
                <h1 className="xl:text-3xl sm:text-xl text-lg font-bold">
                  One-Stop <br />
                  Products Sourcing
                </h1>
              </div>
              <div>
                <Image
                  src={`/home/products/Logo-SMP-Agile-Technology.png`}
                  width={90}
                  height={90}
                  alt="Logo-SMP-Agile-Technology"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-end items-start sm:text-base text-sm space-y-4">
            <p>
              ด้วยความต้องการของลูกค้าในการผลิตที่มีความแม่นยำและประสิทธิภาพสูง
              บริษัทของเราได้รวบรวมเครื่องมือตัดแต่งขึ้นรูปโลหะ เครื่องมือวัด
              อุปกรณ์ในโรงงาน ระบบ IoT
              และระบบอัตโนมัติที่มีคุณภาพสูงครบครันที่สุด ในราคาที่เหมาะสม
              <br />
              <br />
              พร้อมทีมงานผู้เชี่ยวชาญที่พร้อมให้คำปรึกษาและให้บริการหลังการขายที่ดีที่สุดเพื่อให้ลูกค้าของเราได้รับความพึงพอใจสูงสุด
            </p>
            <Link
              href={`#`}
              className="flex flex-wrap items-center text-[#0083CA] font-semibold"
            >
              Learn more
              <span className="flex flex-col items-center justify-center ml-8">
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
        <div className="flex flex-col justify-center items-center mx-auto pt-8 pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-12 gap-8 justify-center items-center ">
            <PostGrids
              title="MACHINING"
              src="/home/products/Procurement_Service-1.jpg"
              alt="machining"
              titleDetail="เครื่องมือตัดแต่งขึ้นรูปโลหะ"
              details="เครื่องมือตัดสำหรับงานกลึง กัด เจาะ ต๊าปเกลียว ทุกประเภท
              อุปกรณ์จับยึดทูล ปากกาจับชิ้นงาน
              คุณภาพสูงที่คัดสรรมากเพื่องานอุตสาหกรรม"
            />
            <PostGrids
              title="MACHINING"
              src="/home/products/Procurement_Service-1.jpg"
              alt="machining"
              titleDetail="เครื่องมือตัดแต่งขึ้นรูปโลหะ"
              details="เครื่องมือตัดสำหรับงานกลึง กัด เจาะ ต๊าปเกลียว ทุกประเภท
              อุปกรณ์จับยึดทูล ปากกาจับชิ้นงาน
              คุณภาพสูงที่คัดสรรมากเพื่องานอุตสาหกรรม"
            />
            <PostGrids
              title="MACHINING"
              src="/home/products/Procurement_Service-1.jpg"
              alt="machining"
              titleDetail="เครื่องมือตัดแต่งขึ้นรูปโลหะ"
              details="เครื่องมือตัดสำหรับงานกลึง กัด เจาะ ต๊าปเกลียว ทุกประเภท
              อุปกรณ์จับยึดทูล ปากกาจับชิ้นงาน
              คุณภาพสูงที่คัดสรรมากเพื่องานอุตสาหกรรม"
            />
            <PostGrids
              title="MACHINING"
              src="/home/products/Procurement_Service-1.jpg"
              alt="machining"
              titleDetail="เครื่องมือตัดแต่งขึ้นรูปโลหะ"
              details="เครื่องมือตัดสำหรับงานกลึง กัด เจาะ ต๊าปเกลียว ทุกประเภท
              อุปกรณ์จับยึดทูล ปากกาจับชิ้นงาน
              คุณภาพสูงที่คัดสรรมากเพื่องานอุตสาหกรรม"
            />
          </div>
        </div>
      </Sections>
    </div>
  );
}
