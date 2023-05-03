import { GetServerSideProps } from "next";
import { prisma } from "@/lib/prismadb";
import FormNew from "@/components/backend/form/form-News";

interface Props {
  news: any;
}

export default function EditNews({ news }: Props) {
  return <FormNew page={news} type="Update" />;
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const slug = params?.slug as string;
  const newsPages = await prisma.news.findMany();
  const findnewsPages = newsPages.find(
    (newsPages: any) => newsPages.slug.toString() === slug
  );
  const news = JSON.parse(JSON.stringify(findnewsPages));

  return {
    props: { news },
  };
};
