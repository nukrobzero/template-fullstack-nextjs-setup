import type { GetStaticProps } from "next";
import { prisma } from "@/lib/prismadb";
import Layout from "@/components/frontend/layout/layout";
import Headers from "@/components/headerAllpage";
import Image from "next/image";
import Link from "next/link";
import Sections from "@/components/layoutpage";

interface Props {
  blogs: any;
}

export default function Blogs({ blogs }: Props) {
  const dateFormat = (data: string): string => {
    const date: Date = new Date(data);
    const formattedDate: string = `${date.getDate()}`;
    return formattedDate;
  };

  const monthFormat = (data: string): string => {
    const date: Date = new Date(data);
    const formattedDate: string = `${date.toLocaleString("default", {
      month: "short",
    })} '${date.getFullYear().toString().substr(-2)}`;
    return formattedDate;
  };

  return (
    <Layout>
      <Headers title="Blogs Page" content="Blogs Page" />
      <div className="max-w-full mx-auto">
        <div
          className="h-60 md:h-[350px]"
          style={{
            backgroundImage: `url("https://res.cloudinary.com/sumipol/image/upload/v1685086107/sumipol-web-image/hero_banner_xsrgro.webp")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center p-4 h-60 md:h-[350px] text-slate-100">
            <h1 className="xl:text-2xl md:text-2xl sm:text-xl text-lg font-bold">
              Blog
            </h1>
            <p className="my-4 text-base sm:text-sm md:text-lg max-w-screen-md text-center">
              อัปเดตล่าสุดทุกเทรนด์อุตสาหกรรมการผลิต ครอบคลุมทุกด้าน
              ตั้งแต่เครื่องมือทันสมัย ระบบอัตโนมัติ และ IoT
              ไปจนถึงการวิเคราะห์และพัฒนาการในอุตสาหกรรม
              ที่นี่คุณจะได้รับความรู้และเทคนิคเพื่อช่วยให้ธุรกิจของคุณประสบความสำเร็จได้มากขึ้น
            </p>
          </div>
        </div>
        <div className="z-10 bg-white">
          <Sections>
            <div className="grid md:grid-cols-3 gap-10 mx-auto my-12">
              {blogs.map((data: any) => (
                <div key={data.id} className="group">
                  <Link href={`blog/${data.slug}`}>
                    <div className="overflow-hidden bg-cover bg-no-repeat border shadow-lg xl:!w-[280px] xl:!h-[350px]">
                      <Image
                        src={data.coverImage}
                        width={280}
                        height={350}
                        alt={data.title}
                        layout="responsive"
                        style={{ objectFit: "cover" }}
                        className="xl:!w-[280px] xl:!h-[350px] transform hover:scale-110 transition duration-500 ease-in-out group-hover:scale-110"
                      />
                    </div>
                    <div className="flex justify-end mb-4 mr-4">
                      <div className="absolute object-center flex flex-col w-65px -mt-[60px] text-right text-white">
                        <span className="text-4xl font-bold bg-[#0083CA] text-center py-[10px]">
                          {dateFormat(data.date)}
                        </span>
                        <span className="text-sm font-bold bg-[#404040] text-center">
                          {monthFormat(data.date)}
                        </span>
                      </div>
                    </div>
                  </Link>
                  <div>
                    <div className="flex flex-row items-center z-10 cursor-default">
                      <svg
                        width="10"
                        height="9"
                        viewBox="0 0 10 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect y="3" width="6" height="6" fill="#0083CA" />
                        <rect x="4" width="6" height="6" fill="#D9D9D9" />
                      </svg>
                      <h1 className="text-sm font-bold uppercase text-[#0083CA] my-2">
                        {data.Category.title}
                      </h1>
                    </div>
                    <Link
                      href={`blog/${data.slug}`}
                      className="text-xl font-bold bg-gradient-to-r from-[#0083CA] to-[#0083CA] bg-[length:0%_2px] bg-no-repeat bg-left-bottom group-hover:bg-[length:100%_3px] transition-all duration-500"
                    >
                      {data.title}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </Sections>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await prisma.blogs.findMany({
    where: {
      status: "Published",
    },
    select: {
      id: true,
      coverImage: true,
      date: true,
      title: true,
      slug: true,
      status: true,
      Category: {
        select: {
          title: true,
        },
      },
    },
    orderBy: {
      date: "desc",
    },
  });
  const blogs = JSON.parse(JSON.stringify(response));
  return {
    props: { blogs },
    revalidate: 20,
  };
};
