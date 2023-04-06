import Sections from "@/components/layoutpage";
import Image from "next/image";
import Link from "next/link";
import PostGrids from "./products/products-grid";

export default function Products() {
  return (
    <div className="max-w-[1920px] mx-auto py-12">
      <div className="bg-[#FAF8F8] flex flex-wrap absolute w-full max-w-4xl md:w-2/4 xl:w-1/2 h-64 md:h-80 xl:h-[500px] -z-10"></div>
      <Sections>
        <div className="flex xl:flex-row md:flex-row sm:flex-col flex-col justify-center items-center xl:h-[300px] md:h-[300px] sm:h-[300px]">
          <div className="flex flex-col items-center justify-start w-full xl:-mt-38 md:-mt-32 sm:mt-36 mb-6">
            <div className="container flex flex-row justify-center">
              <div>
                <h1 className=" uppercase text-sm font-bold text-color1">
                  PRODUCTS
                </h1>
                <h1 className="xl:text-3xl md:text-2xl sm:text-2xl text-lg font-bold">
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
          <div className="container flex flex-col justify-center xl:px-12 md:px-16 md:text-sm xl:text-base sm:text-base text-sm">
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
              className="flex flex-wrap items-center text-color1 my-8"
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
        <div className=" container flex flex-col justify-center items-center xl:m-0 md:m-0 sm:mt-36 my-8">
          <div className="grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 xl:gap-4 gap-8 justify-center items-center ">
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
