"use client";

import { GetStaticProps } from "next";
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
      <div>
        <Headers title="Blogs Page" content="Blogs Page" />
      </div>
      <div className="mt-[80px] max-w-[1920px] mx-auto">
        <div className="h-auto">
          <Image
            src={`/blogs/hero_banner.jpg`}
            width={1920}
            height={350}
            alt="hero_Banner"
            className="absolute -z-10 h-[350px] object-center object-cover"
          />
          <div className="relative flex flex-col justify-center items-center xl:w-768px md:w-600px sm:w-600px w-auto h-[350px] mx-auto p-4 text-center text-white">
            <h1 className="xl:text-2xl md:text-2xl sm:text-xl text-lg font-bold">
              Blog
            </h1>
            <p className="my-4 text-base sm:text-sm md:text-lg max-w-screen-md">
              อัปเดตล่าสุดทุกเทรนด์อุตสาหกรรมการผลิต ครอบคลุมทุกด้าน
              ตั้งแต่เครื่องมือทันสมัย ระบบอัตโนมัติ และ IoT
              ไปจนถึงการวิเคราะห์และพัฒนาการในอุตสาหกรรม
              ที่นี่คุณจะได้รับความรู้และเทคนิคเพื่อช่วยให้ธุรกิจของคุณประสบความสำเร็จได้มากขึ้น
            </p>
          </div>
        </div>
        <Sections>
          <div className="grid xl:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-10 mx-auto my-24">
            {blogs.map((data: any) => (
              <div key={data.id} className="group w-[280px] h-[470px]">
                <Link href={`blog/${data.slug}`}>
                  <div className="overflow-hidden bg-cover bg-no-repeat border shadow-lg">
                    <Image
                      src={`/${data.coverImage}`}
                      width={280}
                      height={350}
                      alt="test"
                      className="transform hover:scale-110 transition duration-500 ease-in-out group-hover:scale-110"
                    />
                  </div>
                  <div className="flex justify-end mb-4 mr-4">
                    <div className="absolute object-center flex flex-col w-65px -mt-[60px] text-right text-white">
                      <span className="text-4xl font-bold bg-[#0083CA] text-center py-[10px]">
                        {dateFormat(data.createdAt)}
                      </span>
                      <span className="text-sm font-bold bg-[#404040] text-center">
                        {monthFormat(data.createdAt)}
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
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await prisma.blogs.findMany({
    select: {
      id: true,
      coverImage: true,
      content: true,
      createdAt: true,
      description: true,
      title: true,
      slug: true,
      Category: {
        select: {
          title: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  const blogs = JSON.parse(JSON.stringify(response));
  return {
    props: { blogs },
    revalidate: 60,
  };
};
