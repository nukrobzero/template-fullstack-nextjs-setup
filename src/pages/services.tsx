import Headers from "@/components/headerAllpage";
import Layout from "@/components/layout/layout";
import Sections from "@/components/layoutpage";
import Image from "next/image";

export default function Services() {
  return (
    <Layout>
      <div>
        <Headers title="Services Page" content="Service" />

        <section
          className="flex flex-col justify-center items-center h-64"
          style={{
            backgroundImage: "url('/services/Service_Cover.jpg')",
            backgroundColor: "#6F6F6F",
            backgroundBlendMode: "multiply",
          }}
        >
          <Sections>
            <div className="flex flex-col max-w-2xl justify-center items-center text-center text-white">
              <h1 className="text-4xl font-bold mb-4">Services</h1>
              <p>
                ประโยชน์สูงสุดของลูกค้าคือเป้าหมายของเรา
                สุมิพลมีทีมงานมืออาชีพที่สามารถตอบสนองทุกความต้องการ
                เพื่อให้การใช้เครื่องจักรกลและเครื่องมือได้ประสิทธิภาพสูงสุด
              </p>
            </div>
          </Sections>
        </section>
        <section
          className="h-[600px] flex items-center justify-center"
          style={{
            backgroundImage: "url('/services/bg-service.png')",
            backgroundColor: "#ffffff",
            backgroundBlendMode: "multiply",
          }}
        >
          <Sections>
            <div className="flex flex-row text-white">
              <div className="container flex flex-col pr-14">
                <h2 className="text-4xl mb-4">
                  Your<span className=" font-bold"> Productivity </span>
                  <br />
                  is <span className=" font-bold">Our Priority</span>
                </h2>
                <p className="max-h-md">
                  สุมิพลฯ
                  มุ่งมั่นที่จะสนับสนุนให้การผลิตของท่านบรรลุตามเป้าประสงค์
                  ทั้งในด้านการควบคุมคุณภาพ เพิ่มผลผลิต ประสิทธิภาพ
                  และการลดต้นทุน
                  ด้วยวิธีการปรับปรุงและเพิ่มขีดความสามารถในกระบวนการผลิต
                  บนพื้นฐานการดำเนินงานด้วยความเข้าใจตรงกับความต้องการที่แท้จริง
                </p>
              </div>
              <div className=" container">
                <div className="grid grid-cols-4 grid-rows-3">
                  <div className="col-start-2 row-span-1 h-36 shadow-lg flex flex-col items-center justify-center bg-white text-black">
                    <Image
                      src="/services/Quality.webp"
                      width={135}
                      height={50}
                      alt="Quality"
                      className="w-[50px] h-[50px]"
                    />
                    <h2>คุณภาพ</h2>
                  </div>
                  <div className="col-start-1 col-span-1 row-span-1 h-36 shadow-lg flex flex-col items-center justify-center bg-[#005499] text-white">
                    <Image
                      src="/services/Productivity.webp"
                      width={135}
                      height={50}
                      alt="Productivity"
                      className="w-[50px] h-[50px]"
                    />
                    <h2>ผลผลิต</h2>
                  </div>
                  <div className="col-start-2 col-span-1 row-span-1 h-36 shadow-lg flex flex-col items-center justify-center bg-[#D7ECFF] text-black">
                    <Image
                      src="/services/Cost-Saving.webp"
                      width={135}
                      height={50}
                      alt="Cost-Saving"
                      className="w-[50px] h-[50px]"
                    />
                    <h2>ประสิทธิภาพ</h2>
                  </div>
                  <div className="col-start-3 col-span-1 row-span-1 h-36 shadow-lg flex flex-col items-center justify-center bg-[#005499] text-white">
                    <Image
                      src="/services/No-Defect_w.webp"
                      width={135}
                      height={50}
                      alt="No-Defect_w"
                      className="w-[50px] h-[50px]"
                    />
                    <h2>ไม่มีของเสีย</h2>
                  </div>
                  <div className="col-start-4 col-span-1 row-span-1 h-36 shadow-lg flex flex-col items-center justify-center bg-[#D7ECFF] text-black">
                    <Image
                      src="/services/Consistency_b.webp"
                      width={135}
                      height={50}
                      alt="Consistency_b"
                      className="w-[50px] h-[50px]"
                    />
                    <h2>มีความเสถียร</h2>
                  </div>
                  <div className="col-start-3 col-span-1 row-span-1 h-36 shadow-lg flex flex-col items-center justify-center bg-white text-black">
                    <Image
                      src="/services/Effective.webp"
                      width={135}
                      height={50}
                      alt="Effective"
                      className="w-[50px] h-[50px]"
                    />
                    <h2>แม่นยำ</h2>
                  </div>
                </div>
              </div>
            </div>
          </Sections>
        </section>
      </div>
    </Layout>
  );
}
