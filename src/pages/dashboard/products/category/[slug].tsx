import { GetServerSideProps } from "next";
import { prisma } from "@/lib/prismadb";
import FormCategory from "@/components/backend/form/form-category";

interface Props {
  category: any;
}

export default function EditCategory({ category }: Props) {
  return (
    <FormCategory
      page={category}
      apiUrl="/api/dashboard/products/category"
      linkUrl="/dashboard/products/category"
      titleHead="Products Category"
      type="Update"
    />
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const slug = params?.slug as string;
  const pages = await prisma.categoryProducts.findMany();
  const findcategorys = pages.find(
    (category: any) => category.slug.toString() === slug
  );
  const category = JSON.parse(JSON.stringify(findcategorys));

  return {
    props: { category },
  };
};
