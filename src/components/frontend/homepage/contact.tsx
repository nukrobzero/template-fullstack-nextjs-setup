import Sections from "@/components/layoutpage";
import Image from "next/image";

export default function ContactHome() {
  return (
    <div className="xl:max-w-[1920px] md:max-w-screen-md sm:max-w-screen-sm mx-auto xl:p-0 p-4 relative h-700px my-6">
      <Image
        src={`/home/contact-us/bg-img.jpg`}
        width={1920}
        height={1080}
        alt="bg"
        className="absolute -z-10 w-full object-center object-fill bg-cover"
      />
      <Sections>
        <div className="md:px-24 h-700px flex flex-col justify-center">
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
