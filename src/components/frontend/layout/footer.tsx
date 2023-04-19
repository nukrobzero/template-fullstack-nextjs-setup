import Image from "next/image";
import Link from "next/link";
import { FaFacebookSquare, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const yearFormat = () => {
    const date: Date = new Date();
    const formattedDate: string = `${date.getFullYear().toString()}`;
    return formattedDate;
  };

  return (
    <div className="bg-[#2C2C2C] xl:h-400px">
      <div className="p-4 text-[#D9D9D9] max-w-screen-xl mx-auto flex flex-col md:flex-row md:space-x-16 xl:h-400px">
        <div className="flex flex-col justify-center md:w-[700px]">
          <div className="py-4">
            <Image
              src={`/footer/Logo-Sumipol-Agile-white.png`}
              width={100}
              height={100}
              alt="ft-logo"
            />
          </div>
          <div className="space-y-8">
            <h1 className="font-bold">Sumipol Corporation Limited</h1>
            <div className="flex lg:flex-row flex-col lg:space-x-16 lg:space-y-none space-y-4">
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
        <div className="grid md:grid-rows-2 grid-cols-1 py-8">
          <div className="hidden md:block">Subscribe</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:pb-12 md:-mt-12">
            <div>
              <h1 className="font-semibold pb-2">สินค้าของเรา</h1>
              <ul className="list-disc pl-6">
                <li>เครื่องมือตัดแต่งขึ้นรูปโลหะ</li>
                <li>เครื่องมือวัด</li>
                <li>เครื่องมือช่าง อุปกรณ์ และสินค้าทั่วไปที่ใช้ในโรงงาน</li>
                <li>ระบบ IoT และระบบอัตโนมัติ</li>
              </ul>
            </div>
            <div>
              <h1 className="font-semibold pb-2">บริการของเรา</h1>
              <ul className="list-disc pl-6">
                <li>Smart Manufacturing Solutions</li>
                <li>Machining Solutions</li>
                <li>Measuring Solutions</li>
                <li>MRO</li>
              </ul>
            </div>
            <div>
              <h1 className="font-semibold pb-2">อื่นๆ</h1>
              <ul className="list-disc pl-6">
                <li>ข่าวสาร</li>
                <li>ดาวน์โหลด</li>
                <li>ร่วมงานกับเรา</li>
                <li>นโยบายความเป็นส่วนตัว</li>
                <li>ข้อตกลงและเงื่อนไข</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center p-2 bg-[#0083CA] text-white">
        <span className="font-semibold text-xs">
          COPYRIGHT ©{yearFormat()} SUMIPOL CORPORATION LIMITED
        </span>
      </div>
    </div>
  );
}
