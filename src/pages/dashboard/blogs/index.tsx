import { GetServerSideProps } from "next";
import { prisma } from "@/lib/prismadb";
import TableBlogs from "@/components/backend/tables/table_Blogs";

interface BlogsProps {
  blogs: any;
}

export default function Blogs({ blogs }: BlogsProps) {
  return (
    <TableBlogs
      page={blogs}
      pageTitle="Blogs"
      apiurl={`/api/dashboard/blog`}
      linkUrl="/dashboard/blogs"
    />
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await prisma.blogs.findMany({
    select: {
      id: true,
      title: true,
      date: true,
      slug: true,
      status: true,
      Category: {
        select: {
          title: true,
        },
      },
    },
  });

  const blogs = JSON.parse(JSON.stringify(res));
  return {
    props: { blogs },
  };
};
