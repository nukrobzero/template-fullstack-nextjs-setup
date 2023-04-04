import Image from "next/image";
import Sections from "../../layoutpage";
import ItemsServices from "./items-image-services";

export default function ServiceHero() {
  return (
    <div>
      <Image
        src={`/home/services/Rectangle-51.png`}
        width={1440}
        height={400}
        alt="bg-service-solutons"
        className=" absolute object-cover xl:h-[490px] md:h-[580px] sm:h-[700px] h-[1050px] -z-10"
      />
      <Sections>
        <div className="flex flex-col justify-center items-center container xl:my-16 md:my-12 my-10">
          <div className="text-center">
            <h3 className=" uppercase text-[#0083CA] font-bold text-sm ">
              SOLUTIONS
            </h3>
            <h5 className=" my-4 xl:text-3xl md:text-3xl sm:text-3xl text-xl font-bold">
              <span className=" text-[#0083CA]">. </span>Your Productivity is
              <span className=" text-[#0083CA]"> Our Priority</span>
            </h5>
            <p className=" max-w-xl text-sm">
              ประโยชน์สูงสุดของลูกค้าคือเป้าหมายของเรา
              สุมิพลมีทีมงานมืออาชีพที่สามารถตอบสนองทุกความต้องการ
              เพื่อให้การใช้เครื่องจักรกลและเครื่องมือได้ประสิทธิภาพสูงสุด
            </p>
          </div>
          <div className="mt-16 grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 items-center justify-center justify-items-center text-center xl:gap-36 md:gap-6 sm:gap-y-20 sm:gap-x-6 gap-y-20 text-sm">
            <ItemsServices
              src="/home/services/Icon-Solution-01.png"
              width={70}
              height={70}
              alt="MACHINING SOLUTIONS"
              title="MACHINING SOLUTIONS"
            />
            <ItemsServices
              src="/home/services/Icon-Solution-02.png"
              width={70}
              height={70}
              alt="MEASURING SOLUTIONS"
              title="MEASURING SOLUTIONS"
            />
            <ItemsServices
              src="/home/services/Icon-Solution-03.png"
              width={70}
              height={70}
              alt="SMART MANUFACTURING SOLUTIONS"
              title="SMART MANUFACTURING SOLUTIONS"
            />
            <ItemsServices
              src="/home/services/Icon-Solution-04.png"
              width={70}
              height={70}
              alt="MAINTENANCE REPAIR OPERATION SOLUTIONS"
              title="MAINTENANCE REPAIR OPERATION SOLUTIONS"
            />
          </div>
        </div>
      </Sections>
    </div>
  );
}
