import { GetServerSideProps } from "next";
import { prisma } from "@/lib/prismadb";
import TableDefault from "@/components/backend/tables/table_default";

interface Props {
  category: any;
}

export default function Category({ category }: Props) {
  return (
    <TableDefault
      apiurl={`/api/dashboard/blog/category`}
      linkURL={`/dashboard/blogs/category`}
      page={category}
      pageTitle="Blogs Category"
      showCategory={false}
      showStatus={false}
    />
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await prisma.category.findMany({
    select: {
      id: true,
      title: true,
      slug: true,
      createdAt: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  const category = JSON.parse(JSON.stringify(res));
  return {
    props: { category },
  };
};
