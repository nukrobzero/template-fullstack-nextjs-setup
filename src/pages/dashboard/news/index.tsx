import TableDefault from "@/components/backend/tables/table_default";
import { GetServerSideProps } from "next";

interface Props {
  news: any;
}

export default function NewsAndActivities({ news }: any) {
  return (
    <div>
      <div>
        <TableDefault
          page={news}
          apiurl="/api/dashboard/news"
          linkURL={`/dashboard/news`}
          pageTitle="News"
          showCategory={false}
          showStatus={true}
        />
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await prisma.news.findMany({
    select: {
      id: true,
      title: true,
      slug: true,
      status: true,
      createdAt: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  const news = JSON.parse(JSON.stringify(res));

  return {
    props: { news },
  };
};
