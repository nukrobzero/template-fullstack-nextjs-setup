import { GetServerSideProps } from "next";
import { prisma } from "@/lib/prismadb";
import TableDefault from "@/components/backend/tables/table_default";

interface Props {
  page: any;
}

export default function Careers({ page }: Props) {
  return (
    <TableDefault
      page={page}
      apiurl={`/api/dashboard/careers`}
      linkURL={`/dashboard/careers`}
      pageTitle="Careers"
      showCategory={false}
      showStatus={true}
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
