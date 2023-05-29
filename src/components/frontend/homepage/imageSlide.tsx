import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Image from "next/image";

export default function ImageSlider() {
  const properties = {
    duration: 1500,
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
      url: "https://res.cloudinary.com/sumipol/image/upload/v1685081004/sumipol-web-image/banner/Sumitomo_jr8rli.webp",
      caption: "Sumitomo",
    },
    {
      url: "https://res.cloudinary.com/sumipol/image/upload/v1685081004/sumipol-web-image/banner/OSG_c8gk3g.webp",
      caption: "OSG",
    },
    {
      url: "https://res.cloudinary.com/sumipol/image/upload/v1685081004/sumipol-web-image/banner/A.L.M.T-Corp_ia5s9b.webp",
      caption: "A.L.M.T",
    },
    {
      url: "https://res.cloudinary.com/sumipol/image/upload/v1685081005/sumipol-web-image/banner/Big-Daishowa_yppwkw.webp",
      caption: "Big-Daishowa",
    },
    {
      url: "https://res.cloudinary.com/sumipol/image/upload/v1685081005/sumipol-web-image/banner/mitutoyo_wzqdrh.webp",
      caption: "mitutoyo",
    },
    {
      url: "https://res.cloudinary.com/sumipol/image/upload/v1685081005/sumipol-web-image/banner/Omron_zy9s7h.webp",
      caption: "Omron",
    },
    {
      url: "https://res.cloudinary.com/sumipol/image/upload/v1685081005/sumipol-web-image/banner/Denso_ek8d0m.webp",
      caption: "Denso",
    },
    {
      url: "https://res.cloudinary.com/sumipol/image/upload/v1685081005/sumipol-web-image/banner/DMG-Mori_mm1tuo.webp",
      caption: "DMG-Mori",
    },
    {
      url: "https://res.cloudinary.com/sumipol/image/upload/v1685081005/sumipol-web-image/banner/Fanuc_nkgkle.webp",
      caption: "Fanuc",
    },
    {
      url: "https://res.cloudinary.com/sumipol/image/upload/v1685081005/sumipol-web-image/banner/Nachi_oipjzw.webp",
      caption: "Nachi",
    },
    {
      url: "https://res.cloudinary.com/sumipol/image/upload/v1685081004/sumipol-web-image/banner/Trusco_imu5pg.webp",
      caption: "Trusco",
    },
    {
      url: "https://res.cloudinary.com/sumipol/image/upload/v1685081004/sumipol-web-image/banner/logo-Patlite_yhve5e.webp",
      caption: "Patlite",
    },
  ];

  return (
    <div className="w-full">
      <Slide {...properties}>
        {slideImages1.map((slideImages, idx) => (
          <div key={idx} className="slide-container">
            <div className="flex items-center justify-center">
              <Image
                src={slideImages.url}
                width={300}
                height={300}
                alt={slideImages.caption}
                title={slideImages.caption}
                priority={true}
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
}
