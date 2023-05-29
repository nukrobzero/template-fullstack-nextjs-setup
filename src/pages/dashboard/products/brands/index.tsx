import { GetServerSideProps } from "next";
import { prisma } from "@/lib/prismadb";
import TableDefault from "@/components/backend/tables/table_default";

interface Props {
  brands: any;
}

export default function ProductsBrands({ brands }: Props) {
  return (
    <TableDefault
      apiurl={`/api/dashboard/products/brands`}
      linkURL={`/dashboard/products/brands`}
      page={brands}
      pageTitle="Products Brands"
      showCategory={false}
      showStatus={false}
    />
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await prisma.brandProducts.findMany({
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
  const brands = JSON.parse(JSON.stringify(res));
  return {
    props: { brands },
  };
};
