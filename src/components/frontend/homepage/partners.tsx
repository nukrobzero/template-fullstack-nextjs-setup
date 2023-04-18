import Sections from "@/components/layoutpage";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function Partners() {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const slideImages1 = [
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
    {
      url: "/home/Hero-Banner.jpg",
      caption: "slideImage4",
    },
    {
      url: "/home/Hero-Banner.jpg",
      caption: "slideImage4",
    },
    {
      url: "/home/Hero-Banner.jpg",
      caption: "slideImage4",
    },
    {
      url: "/home/Hero-Banner.jpg",
      caption: "slideImage4",
    },
  ];

  return (
    <div className="xl:max-w-screen-xl md:max-w-screen-md sm:max-w-screen-sm mx-auto p-4 md:px-24">
      <div>
        <Slider {...settings} className="max-h-200px">
          {slideImages1.map((image, index) => (
            <div key={index}>
              <Image
                src={image.url}
                width={300}
                height={300}
                alt={image.caption}
                className="w-150px h-100px"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
