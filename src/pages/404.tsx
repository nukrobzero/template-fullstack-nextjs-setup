import Layout from "@/components/frontend/layout/layout";
import Link from "next/link";

export default function NotFound() {
  return (
    <Layout>
      <div className="mt-[80px] flex items-center justify-center h-screen bg-gradient-to-r from-indigo-400 to-[#0083CA]">
        <div className="px-40 py-20 bg-white rounded-md shadow-xl">
          <div className="flex flex-col items-center">
            <h1 className="font-bold text-blue-600 text-9xl">404</h1>

            <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
              <span className="text-red-500">Oops!</span> Page not found
            </h6>

            <p className="mb-8 text-center text-gray-500 md:text-lg">
              The page you’re looking for doesn’t exist.
            </p>

            {/* <Link
              href="/"
              className="px-6 py-2 text-sm font-semibold text-blue-800 hover:text-white bg-blue-100  hover:bg-blue-400"
            >
              Go home
            </Link> */}
          </div>
        </div>
      </div>
    </Layout>
  );
}
