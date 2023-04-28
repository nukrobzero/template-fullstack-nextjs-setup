import { GetServerSideProps } from "next";
import { prisma } from "@/lib/prismadb";
import FormCareers from "@/components/backend/form/form-Careers";

interface Props {
  careers: any;
}

export default function EditCareers({ careers }: Props) {
  return <FormCareers page={careers} type="Update" />;
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const slug = params?.slug as string;
  const pages = await prisma.careers.findMany();
  const findcareers = pages.find(
    (careers: any) => careers.slug.toString() === slug
  );
  const careers = JSON.parse(JSON.stringify(findcareers));

  return {
    props: { careers },
  };
};
