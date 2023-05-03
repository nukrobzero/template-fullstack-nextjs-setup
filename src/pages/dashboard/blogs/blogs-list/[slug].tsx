import { GetServerSideProps } from "next";
import { prisma } from "@/lib/prismadb";
import FormBlog from "@/components/backend/form/form-Blogs";

interface Props {
  blog: any;
  category: any;
}

export default function EditBlog({ blog, category }: Props) {
  return <FormBlog page={blog} category={category} type="Update" />;
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const slug = params?.slug as string;
  const pages = await prisma.blogs.findMany({
    include: {
      Category: true,
    },
  });
  const findPage = pages.find((page: any) => page.slug.toString() === slug);
  const blog = JSON.parse(JSON.stringify(findPage));

  const categorys = await prisma.category.findMany();
  const category = JSON.parse(JSON.stringify(categorys));
  return {
    props: { blog, category },
  };
};
