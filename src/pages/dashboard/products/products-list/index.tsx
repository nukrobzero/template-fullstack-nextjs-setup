import { GetServerSideProps } from "next";
import { prisma } from "@/lib/prismadb";
import TableDefault from "@/components/backend/tables/table_default";

interface ProductsProps {
  products: any;
}

export default function Products({ products }: ProductsProps) {
  return (
    <TableDefault
      page={products}
      pageTitle="Products List"
      apiurl={`/api/dashboard/products`}
      linkURL={`/dashboard/products/products-list`}
      showCategory={true}
      showStatus={true}
    />
  );
}

// export const getServerSideProps: GetServerSideProps = async () => {
//   const res = await prisma.products.findMany({
//     select: {
//       id: true,
//       title: true,
//       createdAt: true,
//       slug: true,
//       status: true,
//       Category: {
//         select: {
//           title: true,
//         },
//       },
//     },
//     orderBy: {
//       createdAt: "desc",
//     },
//   });

//   const products = JSON.parse(JSON.stringify(res));
//   return {
//     props: { products },
//   };
// };
