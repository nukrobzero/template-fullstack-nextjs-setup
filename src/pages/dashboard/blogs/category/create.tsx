import FormCategory from "@/components/backend/form/form-category";

interface Props {
  page: any;
}

export default function CreateCategory({ page }: Props) {
  return (
    <FormCategory
      page={page}
      apiUrl="/api/dashboard/blog/category"
      linkUrl="/dashboard/blogs/category"
      titleHead="Blog Category"
      type="Create"
    />
  );
}
