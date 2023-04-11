import { GetStaticProps } from "next";
import { prisma } from "@/lib/prismadb";
import Layout from "@/components/frontend/layout/layout";
import Headers from "@/components/headerAllpage";

interface Props {
  blogs: any;
}
("use client");

export default function Blogs({ blogs }: Props) {
  console.log(blogs);
  return (
    <Layout>
      <div>
        <Headers title="Blogs Page" content="Blogs Page" />
      </div>
      <div className="mt-80px max-w-screen-xl mx-auto">
        <div className="flex flex-col justify-center items-center">
          {blogs.map((data: any) => (
            <ul key={data.id}>
              <h1>{data.title}</h1>
              <li dangerouslySetInnerHTML={{ __html: data.content }}></li>
            </ul>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await prisma.blogs.findMany({
    include: {
      Category: true,
    },
  });
  const blogs = JSON.parse(JSON.stringify(response));
  return {
    props: { blogs },
    revalidate: 60,
  };
};
