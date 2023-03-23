import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Hi this Dashboard</h1>
      <div>
        <Link href={`dashboard/service`}>Service</Link>
      </div>
    </div>
  );
}
