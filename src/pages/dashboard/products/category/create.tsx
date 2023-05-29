import FormCategory from "@/components/backend/form/form-category";

interface Props {
  page: any;
}

export default function CreateProductsCategory({ page }: Props) {
  return (
    <FormCategory
      page={page}
      apiUrl="/api/dashboard/products/category"
      linkUrl="/dashboard/products/category"
      titleHead="Products Category"
      type="Create"
    />
  );
}
