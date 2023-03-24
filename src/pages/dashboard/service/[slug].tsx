import { useRouter } from "next/router";

export default function SubServicePage() {
  const router = useRouter();
  const slug = router.query.slug;
  return (
    <div>
      <h1>Hi this Sub Service Page {slug}</h1>
    </div>
  );
}
