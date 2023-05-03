import { useSession, signIn, signOut } from "next-auth/react";
import Sidebar from "./sidebar";

export default function LayoutAdmin({ children }: any) {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (!session) {
    signIn();
    return null;
  }
  //console.log(session);
  return (
    <div>
      <main>
        <div className="flex flex-row bg-gradient-to-r from-rose-100 to-teal-100 min-h-screen">
          <Sidebar />
          <div className="mx-auto w-[70%] p-4">{children}</div>
        </div>
      </main>
    </div>
  );
}
