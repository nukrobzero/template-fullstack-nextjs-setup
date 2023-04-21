import { GetServerSideProps } from "next";
import { prisma } from "@/lib/prismadb";
import Table from "@/components/backend/tables/table_Career";

interface Props {
  page: any;
}

export default function Careers({ page }: Props) {
  return (
    <div>
      <Table
        page={page}
        apiurl="/api/dashboard/blog"
        linkUrl="/dashboard/careers"
        title="Careers"
      />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await prisma.careers.findMany();
  const page = JSON.parse(JSON.stringify(res));

  return {
    props: { page },
  };
};
