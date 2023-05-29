import { GetServerSideProps } from "next";
import { prisma } from "@/lib/prismadb";
import TableDefault from "@/components/backend/tables/table_default";

interface BlogsProps {
  blogs: any;
}

export default function Blogs({ blogs }: BlogsProps) {
  return (
    <TableDefault
      page={blogs}
      pageTitle="Blogs List"
      apiurl={`/api/dashboard/blog`}
      linkURL={`/dashboard/blogs/blogs-list`}
      showCategory={true}
      showStatus={true}
    />
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await prisma.blogs.findMany({
    select: {
      id: true,
      title: true,
      createdAt: true,
      slug: true,
      status: true,
      category: {
        select: {
          title: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const blogs = JSON.parse(JSON.stringify(res));
  return {
    props: { blogs },
  };
};
