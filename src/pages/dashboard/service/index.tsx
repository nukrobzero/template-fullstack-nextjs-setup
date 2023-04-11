import { GetServerSideProps } from "next";
import { prisma } from "@/lib/prismadb";
import ServiceForm from "@/components/backend/services/serviceDash";

type Props = {
  page: any;
};

export default function Service({ page }: Props) {
  return (
    <div>
      <ServiceForm
        page={page}
        apiurl="/api/dashboard/service"
        titlePage="Service"
      />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await prisma.services.findMany();
  const page = JSON.parse(JSON.stringify(res));
  return {
    props: { page },
  };
};
