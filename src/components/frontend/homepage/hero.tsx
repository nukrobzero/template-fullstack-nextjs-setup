import Link from "next/link";
import Sections from "../../layoutpage";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { IoEllipse } from "react-icons/io5";
import Image from "next/image";
import { SetStateAction, useRef, useState } from "react";

export default function Hero() {
  const ref = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: false,
    arrows: false,
    autoplay: true,
    onChange: (oldIndex: any, newIndex: SetStateAction<number>) => {
      setActiveIndex(newIndex);
    },
    active: `slide-container ${activeIndex === 2 ? "active" : ""}`,
  };

  //console.log(ref);

  const slideImages = [
    {
      url: "/home/Hero-Banner.jpg",
      caption: "The Total Industrial",
    },
    {
      url: "/home/Hero-Banner.jpg",
      caption: "slideImage2",
    },
    {
      url: "/home/Hero-Banner.jpg",
      caption: "slideImage3",
    },
    {
      url: "/home/Hero-Banner.jpg",
      caption: "slideImage4",
    },
  ];

  return (
    <section className="h-screen">
      <Slide ref={ref} {...properties}>
        {slideImages.map((slideImages, idx) => (
          <div
            key={idx}
            className="slide-container max-h-[720px] bg-cover bg-fixed bg-no-repeat object-cover text-white"
            style={{
              backgroundImage: `url(${slideImages.url}),linear-gradient(90deg, rgba(0, 0, 0, 0.6) 38.4%, rgba(58, 58, 58, 0.329522) 59.17%, rgba(58, 58, 58, 0) 77.57%)`,
              backgroundBlendMode: "multiply",
            }}
          >
            <Sections>
              <div className="container flex flex-col h-[720px] justify-center text-start">
                <h2 className="lg:text-5xl md:text-5xl text-3xl font-bold">
                  {slideImages.caption}
                  <br />
                  <span className="font-light">Service Provider</span>
                </h2>
                <p className="mt-3 lg:w-[530px] md:w-[530px]">
                  ตอบโจทย์ทุกความต้องการงานอุตสาหกรรม
                </p>
                <div className="mt-9">
                  <Link
                    href={`/#`}
                    className="rounded-sm bg-[#0083CA] px-12 py-4 text-sm hover:bg-[#003F73]"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
              <div className=" container"></div>
            </Sections>
          </div>
        ))}
      </Slide>
      <Sections>
        <div className="z-20 relative top-[-160px] xl:top-[-80px] md:top-[-80px]">
          <div className="flex flex-row items-center">
            <div className="flex flex-row items-center justify-start">
              {slideImages.map((slideImages, idx) => (
                <IoEllipse
                  key={idx}
                  onClick={() => {
                    setActiveIndex(idx); // update the active index
                    (ref.current as any)?.goTo?.(idx); // go to the selected slide using the ref
                  }}
                  color={activeIndex === idx ? "#0083CA" : "#ffffff"}
                  size={20}
                  className={
                    activeIndex === idx
                      ? "border-2 border-[#0083CA] rounded-full mr-4 p-[2px]"
                      : "mr-4 p-[2px] cursor-pointer"
                  }
                />
              ))}
              <div className="bg-white w-32 h-[1px]"></div>
              <div className="text-white text-xs ml-4">
                {activeIndex + 1}/{slideImages.length}
              </div>
            </div>
          </div>
        </div>
      </Sections>
      <div className="z-10 relative xl:top-[-149px] md:top-[-149px] sm:top-[-149px] top-[-149px]">
        <div className="flex flex-row lg:justify-end md:justify-end justify-center">
          <div
            className="flex flex-row items-center justify-center"
            style={{
              backgroundColor: "rgba(58, 58, 58, 0.9)",
            }}
          >
            <div className="text-white xl:px-8 md:px-8 sm:px-4 px-2 lg:mr-40 md:mr-24">
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
