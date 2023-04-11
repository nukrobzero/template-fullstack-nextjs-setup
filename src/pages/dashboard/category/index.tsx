import CategoryDash from "@/components/backend/category";
import { GetServerSideProps } from "next";
import { prisma } from "@/lib/prismadb";

interface Props {
  category: any;
}

export default function Category({ category }: Props) {
  return (
    <div>
      <CategoryDash page={category} apiurl={`/api/dashboard/category`} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await prisma.category.findMany();
  const category = JSON.parse(JSON.stringify(res));
  return {
    props: { category },
  };
};
