import Link from "next/link";
import Sections from "../../layoutpage";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { IoEllipse } from "react-icons/io5";
import Image from "next/image";

export default function Hero() {
  const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: false,
    arrows: false,
  };
  return (
    <section className="h-screen">
      <Slide {...properties}>
        <div
          className="h-screen bg-cover bg-fixed bg-no-repeat text-white"
          style={{
            backgroundImage:
              "url('/home/Hero Banner.jpg'),linear-gradient(90deg, rgba(0, 0, 0, 0.6) 38.4%, rgba(58, 58, 58, 0.329522) 59.17%, rgba(58, 58, 58, 0) 77.57%)",
            backgroundBlendMode: "multiply",
          }}
        >
          <Sections>
            <div className="container flex flex-col h-screen justify-center text-start">
              <h2 className="lg:text-5xl md:text-5xl text-3xl font-bold">
                The Total Industrial
                <br />
                <span className="font-light">Service Provider</span>
              </h2>
              <p className="mt-3 lg:w-[530px] md:w-[530px]">
                ตอบโจทย์ทุกความต้องการงานอุตสาหกรรม
              </p>
              <div className="mt-9">
                <Link
                  href={`/#`}
                  className="rounded-sm bg-[#0083CA] px-12 py-4 text-sm hover:bg-blue-900"
                >
                  Learn more
                </Link>
              </div>
            </div>
            <div className=" container"></div>
          </Sections>
        </div>
      </Slide>
      <Sections>
        <div className="z-20 relative top-[-80px]">
          <div className="flex flex-row items-center">
            <div className="flex flex-row items-center justify-start">
              <IoEllipse
                color="#0083CA"
                size={20}
                className="border-2 border-[#0083CA] rounded-full mr-4 p-[2px]"
              />
              <IoEllipse color="white" size={20} className="mr-4 p-[2px]" />
              <IoEllipse color="white" size={20} className="mr-4 p-[2px]" />
              <div className="bg-white w-32 h-[1px]"></div>
              <div className="text-white text-xs ml-4">1/3</div>
            </div>
          </div>
        </div>
      </Sections>
      <div className="z-10 relative top-[-149px]">
        <div className="flex flex-row justify-end">
          <div
            className="flex flex-row items-center justify-center"
            style={{
              backgroundColor: "rgba(58, 58, 58, 0.9)",
            }}
          >
            <div className="text-white px-8 mr-40">
              <h1>Sumipol Corporation Limited</h1>
              <h1>Phone : +66 (02) 762 3000</h1>
              <h1>Email: contact@sumipol.com</h1>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Image
                src={`/home/hero-bg.jpeg`}
                width={173}
                height={100}
                alt="video"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
