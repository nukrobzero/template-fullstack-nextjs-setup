import FormCategory from "@/components/backend/form/form-category";

interface Props {
  page: any;
}

export default function CreateCategory({ page }: Props) {
  return <FormCategory page={page} type="Create" />;
}
