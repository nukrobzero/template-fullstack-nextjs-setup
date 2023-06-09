import { GetServerSideProps } from "next";
import { prisma } from "@/lib/prismadb";
import TableDefault from "@/components/backend/tables/table_default";

interface Props {
  category: any;
}

export default function ProductsCategory({ category }: Props) {
  return (
    <TableDefault
      apiurl={`/api/dashboard/products/category`}
      linkURL={`/dashboard/products/category`}
      page={category}
      pageTitle="Products Category"
      showCategory={false}
      showStatus={false}
    />
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await prisma.categoryProducts.findMany({
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
