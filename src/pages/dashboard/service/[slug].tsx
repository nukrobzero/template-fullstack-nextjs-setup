// import { GetServerSideProps } from "next";
// import { prisma } from "@/lib/prismadb";
// import SubserviceForm from "@/components/backend/SubServiceDash";

// type Props = {
//   page: any;
// };

// export default function SubServicePage({ page }: Props) {
//   return (
//     <div>
//       <SubserviceForm
//         page={page}
//         apiurl="/api/dashboard/subService"
//         titlePage="Sub Service"
//       />
//     </div>
//   );
// }

// export const getServerSideProps: GetServerSideProps = async ({ params }) => {
//   const slug = params?.slug as string;
//   const pages = await prisma.services.findMany({
//     include: {
//       subservices: true,
//     },
//   });
//   const findPage = pages.find((page: any) => page.slug.toString() === slug);
//   const page = JSON.parse(JSON.stringify(findPage));
//   return {
//     props: {
//       page: page,
//     },
//   };
// };
