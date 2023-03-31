import Headers from "@/components/headerAllpage";
import Layout from "@/components/frontend/layout/layout";
import Sections from "@/components/layoutpage";
import Image from "next/image";

export default function Services() {
  return (
    <Layout>
      <div>
        <Headers title="Services Page" content="Service" />
        <section
          className="flex flex-col justify-center items-center lg:h-64 md:h-64 max-h-screen mt-[80px]"
          style={{
            backgroundImage: "url('/services/Service_Cover.jpg')",
            backgroundColor: "#6F6F6F",
            backgroundBlendMode: "multiply",
          }}
        >
          <Sections>
            <div className="flex flex-col max-w-2xl justify-center items-center text-center text-white">
              <h1 className="lg:text-4xl text-3xl font-bold mb-4">Services</h1>
              <p>
                ประโยชน์สูงสุดของลูกค้าคือเป้าหมายของเรา
                สุมิพลมีทีมงานมืออาชีพที่สามารถตอบสนองทุกความต้องการ
                เพื่อให้การใช้เครื่องจักรกลและเครื่องมือได้ประสิทธิภาพสูงสุด
              </p>
            </div>
          </Sections>
        </section>
        <section
          className="lg:h-[560px] max-h-screen flex items-center justify-center"
          style={{
            backgroundImage: "url('/services/bg-service.png')",
            backgroundColor: "#ffffff",
            backgroundBlendMode: "multiply",
          }}
        >
          <Sections>
            <div className="flex lg:flex-row flex-col text-white">
              <div className="container flex flex-col justify-center lg:pr-40 lg:mb-0 mb-5">
                <h2 className="lg:text-3xl text-2xl mb-4">
                  Your<span className=" font-bold"> Productivity </span>
                  <br />
                  is <span className=" font-bold">Our Priority</span>
                </h2>
                <p>
                  สุมิพลฯ
                  มุ่งมั่นที่จะสนับสนุนให้การผลิตของท่านบรรลุตามเป้าประสงค์
                  ทั้งในด้านการควบคุมคุณภาพ เพิ่มผลผลิต ประสิทธิภาพ
                  และการลดต้นทุน
                  ด้วยวิธีการปรับปรุงและเพิ่มขีดความสามารถในกระบวนการผลิต
                  บนพื้นฐานการดำเนินงานด้วยความเข้าใจตรงกับความต้องการที่แท้จริง
                </p>
              </div>
              <div className=" container">
                <div className="grid lg:grid-cols-4 grid-cols-2 lg:grid-rows-3">
                  <div className="lg:col-start-2 lg:row-span-1 h-36 shadow-lg flex flex-col items-center justify-center bg-white text-black">
                    <Image
                      src="/services/Quality.webp"
                      width={135}
                      height={50}
                      alt="Quality"
                      className="w-[50px] h-[50px]"
                    />
                    <h2>คุณภาพ</h2>
                  </div>
                  <div className="lg:col-start-1 lg:col-span-1 lg:row-span-1 h-36 shadow-lg flex flex-col items-center justify-center bg-[#005499] text-white">
                    <Image
                      src="/services/Productivity.webp"
                      width={135}
                      height={50}
                      alt="Productivity"
                      className="w-[50px] h-[50px]"
                    />
                    <h2>ผลผลิต</h2>
                  </div>
                  <div className="lg:col-start-2 lg:col-span-1 lg:row-span-1 h-36 shadow-lg flex flex-col items-center justify-center bg-[#D7ECFF] text-black">
                    <Image
                      src="/services/Cost-Saving.webp"
                      width={135}
                      height={50}
                      alt="Cost-Saving"
                      className="w-[50px] h-[50px]"
                    />
                    <h2>ประสิทธิภาพ</h2>
                  </div>
                  <div className="lg:col-start-3 lg:col-span-1 lg:row-span-1 h-36 shadow-lg flex flex-col items-center justify-center bg-[#005499] text-white">
                    <Image
                      src="/services/No-Defect_w.webp"
                      width={135}
                      height={50}
                      alt="No-Defect_w"
                      className="w-[50px] h-[50px]"
                    />
                    <h2>ไม่มีของเสีย</h2>
                  </div>
                  <div className="lg:col-start-4 lg:col-span-1 lg:row-span-1 h-36 shadow-lg flex flex-col items-center justify-center bg-[#D7ECFF] text-black">
                    <Image
                      src="/services/Consistency_b.webp"
                      width={135}
                      height={50}
                      alt="Consistency_b"
                      className="w-[50px] h-[50px]"
                    />
                    <h2>มีความเสถียร</h2>
                  </div>
                  <div className="lg:col-start-3 lg:col-span-1 lg:row-span-1 h-36 shadow-lg flex flex-col items-center justify-center bg-white text-black">
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
        <section className="flex flex-col mt-12">
          <Sections>
            <div className="flex flex-col justify-center items-center">
              <h1 className="lg:text-4xl text-2xl font-bold mb-16">
                คุณค่าบริการที่จะได้รับ
              </h1>
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-5 sm:gap-4 gap-3">
                <div className="flex flex-col justify-center items-center p-4 shadow-xl rounded-sm">
                  <Image
                    src="/services/Procurement_Service-600x450.webp"
                    width={300}
                    height={370}
                    alt="Procurement_Service"
                    className=""
                  />
                  <h2 className=" font-bold my-2">COMPREHENSIVE PROCUREMENT</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptates ex repudiandae corrupti exercitationem dolor,
                    itaque laborum perspiciatis quo impedit nemo eaque commodi
                    et libero! Harum excepturi dolore rerum eius quas!
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center p-4 shadow-xl rounded-sm">
                  <Image
                    src="/services/Procurement_Service-600x450.webp"
                    width={300}
                    height={370}
                    alt="Procurement_Service"
                    className=""
                  />
                  <h2 className=" font-bold my-2">COMPREHENSIVE PROCUREMENT</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptates ex repudiandae corrupti exercitationem dolor,
                    itaque laborum perspiciatis quo impedit nemo eaque commodi
                    et libero! Harum excepturi dolore rerum eius quas!
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center p-4 shadow-xl rounded-sm">
                  <Image
                    src="/services/Procurement_Service-600x450.webp"
                    width={300}
                    height={370}
                    alt="Procurement_Service"
                    className=""
                  />
                  <h2 className=" font-bold my-2">COMPREHENSIVE PROCUREMENT</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptates ex repudiandae corrupti exercitationem dolor,
                    itaque laborum perspiciatis quo impedit nemo eaque commodi
                    et libero! Harum excepturi dolore rerum eius quas!
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center p-4 shadow-xl rounded-sm">
                  <Image
                    src="/services/Procurement_Service-600x450.webp"
                    width={300}
                    height={370}
                    alt="Procurement_Service"
                    className=""
                  />
                  <h2 className=" font-bold my-2">COMPREHENSIVE PROCUREMENT</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptates ex repudiandae corrupti exercitationem dolor,
                    itaque laborum perspiciatis quo impedit nemo eaque commodi
                    et libero! Harum excepturi dolore rerum eius quas!
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center p-4 shadow-xl rounded-sm">
                  <Image
                    src="/services/Procurement_Service-600x450.webp"
                    width={300}
                    height={370}
                    alt="Procurement_Service"
                    className=""
                  />
                  <h2 className=" font-bold my-2">COMPREHENSIVE PROCUREMENT</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptates ex repudiandae corrupti exercitationem dolor,
                    itaque laborum perspiciatis quo impedit nemo eaque commodi
                    et libero! Harum excepturi dolore rerum eius quas!
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center p-4 shadow-xl rounded-sm">
                  <Image
                    src="/services/Procurement_Service-600x450.webp"
                    width={300}
                    height={370}
                    alt="Procurement_Service"
                    className=""
                  />
                  <h2 className=" font-bold my-2">COMPREHENSIVE PROCUREMENT</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptates ex repudiandae corrupti exercitationem dolor,
                    itaque laborum perspiciatis quo impedit nemo eaque commodi
                    et libero! Harum excepturi dolore rerum eius quas!
                  </p>
                </div>
              </div>
            </div>
          </Sections>
        </section>
        {/* bg */}
        <div
          className="h-[260px] max-h-screen flex items-center justify-center mt-12"
          style={{
            backgroundImage: "url('/services/Service_bg_5-scaled.jpg')",
            backgroundColor: "#6F6F6F",
            backgroundBlendMode: "multiply",
          }}
        >
          <Sections>
            <div className="lg:max-w-2xl text-center">
              <h1 className=" text-lg text-white">
                สุมิพลทำงานร่วมกับเครือข่ายพันธมิตรผู้ผลิตที่เป็นผู้นำเทคโนโลยีระดับโลกอย่างใกล้ชิด
                โดยเฉพาะการให้บริการด้านเทคนิคและพัฒนาการผลิตแก่ลูกค้า
              </h1>
            </div>
          </Sections>
        </div>
        <section>
          <Sections>
            <div>
              <h1 className="text-4xl">Services & Solutons</h1>
            </div>
          </Sections>
        </section>
      </div>
    </Layout>
  );
}
