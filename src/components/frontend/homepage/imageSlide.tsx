import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Image from "next/image";

export default function ImageSlider() {
  const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: false,
    autoplay: true,
    slidesToShow: 4,
  };

  //console.log(ref);

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
      caption: "slideImage2",
    },
    {
      url: "/home/Hero-Banner.jpg",
      caption: "slideImage2",
    },
    {
      url: "/home/Hero-Banner.jpg",
      caption: "slideImage2",
    },
    {
      url: "/home/Hero-Banner.jpg",
      caption: "slideImage2",
    },
  ];

  return (
    <div className="w-full">
      <Slide {...properties}>
        {slideImages1.map((slideImages, idx) => (
          <div key={idx} className="slide-container">
            <div className="">
              <Image
                src={slideImages.url}
                width={150}
                height={100}
                alt={slideImages.caption}
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
}
