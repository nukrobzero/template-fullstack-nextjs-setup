import { GetServerSideProps } from "next";
import { prisma } from "@/lib/prismadb";
import FormCategory from "@/components/backend/form/form-category";

interface Props {
  category: any;
}

export default function EditCategory({ category }: Props) {
  return <FormCategory page={category} type="Update" />;
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const slug = params?.slug as string;
  const pages = await prisma.category.findMany();
  const findcategorys = pages.find(
    (category: any) => category.slug.toString() === slug
  );
  const category = JSON.parse(JSON.stringify(findcategorys));

  return {
    props: { category },
  };
};
