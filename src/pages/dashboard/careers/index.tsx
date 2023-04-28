import { GetServerSideProps } from "next";
import { prisma } from "@/lib/prismadb";
import TableCareers from "@/components/backend/tables/table_Career";

interface Props {
  page: any;
}

export default function Careers({ page }: Props) {
  return (
    <TableCareers
      page={page}
      apiurl="/api/dashboard/careers"
      linkUrl="/dashboard/careers"
      pageTitle="Careers"
    />
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await prisma.careers.findMany({
    select: {
      id: true,
      title: true,
      slug: true,
      status: true,
      createdAt: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  const page = JSON.parse(JSON.stringify(res));

  return {
    props: { page },
  };
};
