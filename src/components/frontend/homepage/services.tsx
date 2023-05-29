import Sections from "../../layoutpage";
import ItemsServices from "./items-image-services";

export default function ServiceHero() {
  return (
    <section
      className="max-w-screen-2xl mx-auto"
      style={{
        background: `url("https://res.cloudinary.com/sumipol/image/upload/v1685074493/sumipol-web-image/Rectangle-51_urewej.webp")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Sections>
        <div className="flex flex-col md:h-[400px] justify-center items-center space-y-8 py-4 md:py-0">
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
                src="https://res.cloudinary.com/sumipol/image/upload/v1685074745/sumipol-web-image/Icon-Solution-01_gwoach.webp"
                alt="MACHINING SOLUTIONS"
                title="MACHINING SOLUTIONS"
              />
              <ItemsServices
                src="https://res.cloudinary.com/sumipol/image/upload/v1685074745/sumipol-web-image/Icon-Solution-02_yr30la.webp"
                alt="MEASURING SOLUTIONS"
                title="MEASURING SOLUTIONS"
              />
              <ItemsServices
                src="https://res.cloudinary.com/sumipol/image/upload/v1685074745/sumipol-web-image/Icon-Solution-04_gelyss.webp"
                alt="SMART MANUFACTURING SOLUTIONS"
                title="SMART MANUFACTURING SOLUTIONS"
              />
              <ItemsServices
                src="https://res.cloudinary.com/sumipol/image/upload/v1685074745/sumipol-web-image/Icon-Solution-03_zf8dds.webp"
                alt="MAINTENANCE REPAIR OPERATION SOLUTIONS"
                title="MAINTENANCE REPAIR OPERATION SOLUTIONS"
              />
            </div>
          </div>
        </div>
      </Sections>
    </section>
  );
}
