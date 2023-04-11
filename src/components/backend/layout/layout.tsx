import { useSession, signIn, signOut } from "next-auth/react";
import FooterAdmin from "./footer";
import Link from "next/link";

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
    <div className="flex flex-col h-screen">
      <div className="bg-gray-800 h-16 flex items-center justify-center">
        <h1 className="text-white text-lg font-bold">logo</h1>
      </div>
      <div className="flex flex-grow">
        <div className="bg-gray-400 w-48 h-full flex-shrink-0">
          <ul className="p-2">
            <li className="mb-2">
              <Link
                href="/dashboard"
                className="text-gray-800 hover:text-white hover:bg-gray-800 px-4 py-2 rounded-md block"
              >
                Dashboard
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="/dashboard/service"
                className="text-gray-800 hover:text-white hover:bg-gray-800 px-4 py-2 rounded-md block"
              >
                Services
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="/dashboard/blogs"
                className="text-gray-800 hover:text-white hover:bg-gray-800 px-4 py-2 rounded-md block"
              >
                Blogs
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="/dashboard/category"
                className="text-gray-800 hover:text-white hover:bg-gray-800 px-4 py-2 rounded-md block"
              >
                Category
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="#"
                className="text-gray-800 hover:text-white hover:bg-gray-800 px-4 py-2 rounded-md block"
                onClick={() =>
                  signOut({
                    callbackUrl: "/",
                  })
                }
              >
                Log Out
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex-grow bg-gray-200 p-4">{children}</div>
      </div>
      <div>
        <FooterAdmin />
      </div>
    </div>
  );
}
