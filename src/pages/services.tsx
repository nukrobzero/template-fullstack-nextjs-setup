"use cliient";

import Headers from "@/components/headerAllpage";
import Layout from "@/components/frontend/layout/layout";
import { GetStaticProps } from "next";
import { prisma } from "@/lib/prismadb";

export default function Services({ page }: any) {
  console.log(page);
  return (
    <Layout>
      <div>
        <Headers title="Services Page" content="Service" />
      </div>
      <div className="mt-80px max-w-screen-xl mx-auto">
        {/* <div className="flex flex-col justify-center items-center">
          {page.map((items: any) => (
            <ul key={items.id}>
              <h1>{items.title}</h1>
              <li dangerouslySetInnerHTML={{ __html: items.content }}></li>
            </ul>
          ))}
        </div> */}
      </div>
    </Layout>
  );
}

// export const getStaticProps: GetStaticProps = async () => {
//   const response = await prisma.services.findMany({
//     include: {
//       subservices: true,
//     },
//   });
//   const page = JSON.parse(JSON.stringify(response));
//   return {
//     props: { page },
//     revalidate: 60,
//   };
// };
