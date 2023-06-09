import { GetServerSideProps } from "next";
import { prisma } from "@/lib/prismadb";
import FormBlog from "@/components/backend/form/form-Blogs";

interface Props {
  page: any;
  category: any;
}

export default function CreateBlog({ page, category }: Props) {
  return <FormBlog page={page} category={category} type="Create" />;
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await prisma.categoryBlogs.findMany();
  const category = JSON.parse(JSON.stringify(res));
  return {
    props: { category },
  };
};
