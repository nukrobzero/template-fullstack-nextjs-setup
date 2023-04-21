import { useRouter } from "next/router";
import Link from "next/link";
import LayoutAdmin from "../layout/layout";
import axios from "axios";

interface Props {
  page: any;
  title: string;
  apiurl: string;
  linkUrl: string;
}

export default function Table({ page, title, apiurl, linkUrl }: Props) {
  const router = useRouter();
  const handelDelete = async (id: string) => {
    try {
      await axios.delete(`${apiurl}/${id}`);
      router.reload();
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <LayoutAdmin>
      <div>
        <h1>{title}</h1>
        <div className="flex h-full w-full items-center justify-center">
          <table className=" w-[800px] text-left text-sm text-gray-500 dark:text-gray-400">
            <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Edit
                </th>
                <th scope="col" className="px-6 py-3">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {page?.map((data: any) => (
                <tr
                  key={data.id}
                  className="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <td
                    scope="row"
                    className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                  >
                    <Link href={`${linkUrl}/${data.slug}`}>{data.title}</Link>
                  </td>
                  <td className="px-6 py-4">{data.status}</td>
                  <td className="px-6 py-4">
                    <Link
                      href={`${linkUrl}/${data.slug}`}
                      className="font-medium text-green-600 hover:underline dark:text-green-500"
                    >
                      Edit
                    </Link>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handelDelete(data.id)}
                      className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-5 flex items-center justify-center">
          <Link href={`${linkUrl}/create`}>
            <button className="mr-2 mb-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Create {title}
            </button>
          </Link>
        </div>
      </div>
    </LayoutAdmin>
  );
}
