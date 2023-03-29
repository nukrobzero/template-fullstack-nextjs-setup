import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function Login() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <div className="flex flex-col justify-center items-center  justify-items-center h-screen ">
          Signed in as{" "}
          <span className=" bg-orange-100">{session.user?.email}</span>
          {session.user?.name}
          <br />
          <div className="flex flex-row gap-4 text-xl bg-blue-200">
            <Link href={`/dashboard`} className="hover:text-gray-500">
              Dashboard
            </Link>
            <Link href={`/home`} className="hover:text-orange-400">
              Home Page
            </Link>
          </div>
          <button
            className="mt-4 rounded-tl-lg bg-green-400 rounded-br-lg px-5 py-2 hover:bg-green-600"
            onClick={() => signOut()}
          >
            Sign out
          </button>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="flex flex-col justify-center items-center  justify-items-center h-screen ">
        Not signed in <br />
        <button
          className="mt-4 rounded-tl-lg bg-green-400 rounded-br-lg px-5 py-2 hover:bg-green-600"
          onClick={() => signIn()}
        >
          Sign in
        </button>
      </div>
    </>
  );
}
