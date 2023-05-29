import { GetServerSideProps } from "next";
import { prisma } from "@/lib/prismadb";
import FormCategory from "@/components/backend/form/form-category";

interface Props {
  brands: any;
}

export default function EditBrands({ brands }: Props) {
  return (
    <FormCategory
      page={brands}
      apiUrl="/api/dashboard/products/brands"
      linkUrl="/dashboard/products/brands"
      titleHead="Brand"
      type="Update"
    />
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const slug = params?.slug as string;
  const pages = await prisma.brandProducts.findMany();
  const findbrands = pages.find(
    (category: any) => category.slug.toString() === slug
  );
  const brands = JSON.parse(JSON.stringify(findbrands));

  return {
    props: { brands },
  };
};
