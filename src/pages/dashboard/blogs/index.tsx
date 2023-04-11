import BlogsDash from "@/components/backend/blogs/blog";
import { GetServerSideProps } from "next";
import { prisma } from "@/lib/prismadb";

interface BlogsProps {
  blogs: any;
  category: any;
}

export default function Blogs({ blogs, category }: BlogsProps) {
  return (
    <div>
      <BlogsDash page={blogs} category={category} apiurl={`/api/dashboard/blog`} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await prisma.blogs.findMany({
    include: {
      Category: true,
    },
  });
  const res2 = await prisma.category.findMany();

  const blogs = JSON.parse(JSON.stringify(res));
  const category = JSON.parse(JSON.stringify(res2));
  return {
    props: { blogs, category },
  };
};
