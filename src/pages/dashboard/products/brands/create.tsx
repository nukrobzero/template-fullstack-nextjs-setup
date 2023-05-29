import FormCategory from "@/components/backend/form/form-category";

interface Props {
  page: any;
}

export default function CreateBrands({ page }: Props) {
  return (
    <FormCategory
      page={page}
      apiUrl="/api/dashboard/products/brands"
      linkUrl="/dashboard/products/brands"
      titleHead="Brand"
      type="Create"
    />
  );
}
