import FormCareers from "@/components/backend/form/form-Careers";

interface Props {
  page: any;
}

export default function CreateCareers({ page }: Props) {
  return <FormCareers page={page} type="Create" />;
}
