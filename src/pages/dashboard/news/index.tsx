import Table from "@/components/backend/tables/table_Career";

export default function NewsAndActivities() {
  return (
    <div>
      <div>
        <Table
          page={undefined}
          apiurl="/api/dashboard/news-and-activities"
          linkUrl="/dashboard/news-and-activities"
          pageTitle="News & Activities"
        />
      </div>
    </div>
  );
}
