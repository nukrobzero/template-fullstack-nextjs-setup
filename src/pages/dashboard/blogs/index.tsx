import { GetServerSideProps } from "next";
import { prisma } from "@/lib/prismadb";
import TableBlogs from "@/components/backend/tables/table_Blogs";

interface BlogsProps {
  blogs: any;
  category: any;
}

export default function Blogs({ blogs, category }: BlogsProps) {
  return (
    <TableBlogs
      page={blogs}
      category={category}
      pageTitle="Blogs"
      apiurl={`/api/dashboard/blog`}
      linkUrl="/dashboard/blogs"
    />
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
