import Layout from "@/components/frontend/layout/layout";
import Headers from "@/components/headerAllpage";
import Sections from "@/components/layoutpage";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookSquare, FaTwitter } from "react-icons/fa";

export default function ContactUs() {
  return (
    <Layout>
      <Headers title="Careers Page" content="Careers Page" />
      <div className="max-w-full mx-auto">
        <div
          className="h-60 md:h-[400px]"
          style={{
            backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url("https://res.cloudinary.com/sumipol/image/upload/v1685328347/sumipol-web-image/bg-hero-contact_ytnu2a.webp")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="max-w-screen-xl mx-auto flex flex-col items-start justify-center p-4 h-60 md:h-[400px] text-slate-100">
            <h1 className="xl:text-3xl md:text-2xl sm:text-xl text-lg font-bold">
              Contacts
            </h1>
            <p className="my-4 text-base sm:text-sm md:text-lg max-w-screen-sm">
              ไม่ว่าคุณกำลังมองหาเครื่องมือในโรงงานอุตสาหกรรม
              หรือต้องการคำปรึกษาเกี่ยวกับอุปกรณ์ในโรงงาน
              ทีมงานของเราพร้อมให้บริการคุณ
            </p>
          </div>
        </div>
      </div>
      <Sections>
        <div className="mx-auto flex flex-row justify-between w-full py-16">
          <div className="space-y-8">
            <div>
              <h1 className="text-2xl font-bold">
                Get Closer,
                <br />
                <span className="text-[#0083CA]">Better Service</span>
              </h1>
            </div>
            <div className="space-y-8">
              <h1 className="font-bold">Sumipol Corporation Limited</h1>
              <div className="flex lg:flex-row flex-col lg:space-x-16 lg:space-y-0 space-y-4">
                <span className="flex flex-col justify-center items-start font-semibold">
                  Phone
                  <span className="font-normal">
                    <Link href={`tel:02-762-3000`}>02-762-3000</Link>
                  </span>
                </span>
                <span className="flex flex-col justify-center items-start font-semibold">
                  Email
                  <span className="underline font-normal">
                    <Link href={`mailto:contact@sumipol.com`}>
                      contact@sumipol.com
                    </Link>
                  </span>
                </span>
              </div>
              <div className="space-y-2">
                <span className="font-bold">Follow us</span>
                <div className="flex flex-row space-x-4">
                  <span>
                    <FaFacebookSquare size={20} />
                  </span>
                  <span>
                    <FaTwitter size={20} />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div>contact</div>
        </div>
      </Sections>
    </Layout>
  );
}
