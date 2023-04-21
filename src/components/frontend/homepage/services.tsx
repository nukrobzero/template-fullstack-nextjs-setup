import Image from "next/image";
import Sections from "../../layoutpage";
import ItemsServices from "./items-image-services";

export default function ServiceHero() {
  return (
    <div className="max-w-[1920px] mx-auto">
      <div className="absolute -z-10">
        <Image
          src={`/home/services/Rectangle-51.png`}
          width={1920}
          height={1080}
          alt="bg-service-solutons"
          className="object-cover h-[1090px] md:h-[640px] xl:h-[430px]"
        />
      </div>
      <Sections>
        <div className="mx-auto flex flex-col justify-center items-center py-8 space-y-8">
          <div className="text-center space-y-4">
            <h3 className=" uppercase text-[#0083CA] font-bold text-sm">
              SOLUTIONS
            </h3>
            <h5 className="xl:text-3xl md:text-3xl sm:text-3xl text-xl font-bold">
              <span className=" text-[#0083CA]">. </span>Your Productivity is
              <span className=" text-[#0083CA]"> Our Priority</span>
            </h5>
            <p className="max-w-xl text-sm">
              ประโยชน์สูงสุดของลูกค้าคือเป้าหมายของเรา
              สุมิพลมีทีมงานมืออาชีพที่สามารถตอบสนองทุกความต้องการ
              เพื่อให้การใช้เครื่องจักรกลและเครื่องมือได้ประสิทธิภาพสูงสุด
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="grid md:grid-cols-4 grid-cols-1 gap-4 lg:gap-12 justify-center items-center">
              <ItemsServices
                src="/home/services/Icon-Solution-01.png"
                alt="MACHINING SOLUTIONS"
                title="MACHINING SOLUTIONS"
              />
              <ItemsServices
                src="/home/services/Icon-Solution-02.png"
                alt="MEASURING SOLUTIONS"
                title="MEASURING SOLUTIONS"
              />
              <ItemsServices
                src="/home/services/Icon-Solution-04.png"
                alt="SMART MANUFACTURING SOLUTIONS"
                title="SMART MANUFACTURING SOLUTIONS"
              />
              <ItemsServices
                src="/home/services/Icon-Solution-03.png"
                alt="MAINTENANCE REPAIR OPERATION SOLUTIONS"
                title="MAINTENANCE REPAIR OPERATION SOLUTIONS"
              />
            </div>
          </div>
        </div>
      </Sections>
    </div>
  );
}
