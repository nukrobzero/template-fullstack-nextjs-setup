import { GetStaticProps } from "next";
import { prisma } from "@/lib/prismadb";

interface Props {
  blogs: any;
}

export default function Blogs({ blogs }: Props) {
  console.log(blogs);
  return (
    <div>
      <h1>ths Blogs page</h1>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await prisma.blogs.findMany({
    include: {
      Category: true,
    },
  });
  const blogs = JSON.parse(JSON.stringify(response));
  return {
    props: { blogs },
    revalidate: 60,
  };
};
