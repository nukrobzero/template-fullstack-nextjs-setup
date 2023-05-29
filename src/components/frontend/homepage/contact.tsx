import Sections from "@/components/layoutpage";
import Image from "next/image";

export default function ContactHome() {
  return (
    <div className="max-w-full mx-auto h-[340px] xl:h-[680px] relative bg-no-repeat bg-left">
      <Image
        src={`https://res.cloudinary.com/sumipol/image/upload/v1685081765/sumipol-web-image/bg-img_azhneb.jpg`}
        width={1440}
        height={600}
        alt="bg"
        className="absolute -z-10 w-full h-[340px] object-cover xl:h-[680px]"
      />
      <Sections>
        <div className="h-[340px] xl:h-[680px] flex flex-col justify-center">
          <div className="bg-black text-white p-8 mt-12 max-w-[26rem] text-start space-y-4">
            <h1 className="text-2xl font-bold">
              Get in <span className="text-[#0083CA]">Touch</span>
            </h1>
            <p>
              Have any questions? Reach out to us from our contact form and we
              will get back to you shortly.
            </p>
          </div>
        </div>
      </Sections>
    </div>
  );
}
