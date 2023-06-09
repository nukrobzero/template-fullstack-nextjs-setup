import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import LayoutAdmin from "../layout/layout";
import { useState } from "react";
import { FcSearch } from "react-icons/fc";
import { AiOutlinePlus } from "react-icons/ai";
import { RiDeleteBinLine, RiEditBoxLine } from "react-icons/ri";
import PopUpBTN from "../etc/popupdelete";
import AlertDeleteSuccess from "../etc/alertDeleteSuccess";
import Pagination from "@/components/Pagination";

type Props = {
  page: any;
  apiurl: string;
  pageTitle: string;
  showCategory: boolean;
  showStatus: boolean;
  linkURL: string;
};

export default function TableDefault({
  page,
  apiurl,
  pageTitle,
  showCategory,
  showStatus,
  linkURL,
}: Props) {
  const router = useRouter();
  const [showAlert, setShowAlert] = useState(false);
  const [showCategorys, setShowCategory] = useState(showCategory);
  const [showStatuss, setShowStatus] = useState(showStatus);
  const [valueDataDelete, setValueDataDelete] = useState("");

  const [isOpenPopUpDelete, setIsOpenPopUpDelete] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const [currentPage, setCurrentPage] = useState(0);

  // Data/page
  const [perPage, setPerPage] = useState(10);

  // filter the blogs based on the search query
  const filteredData =
    page &&
    page
      .filter(
        (data: any) =>
          data.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          data.status.toLowerCase().includes(searchQuery.toLowerCase()) ||
          data.createdAt.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .slice(currentPage * perPage, (currentPage + 1) * perPage);

  const handelDelete = async (id: string) => {
    try {
      const res = await axios.delete(`${apiurl}?id=${id}`);

      if (res) {
        setIsOpenPopUpDelete(!isOpenPopUpDelete);
        setShowAlert(!showAlert);
        setTimeout(() => {
          router.reload();
        }, 100);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const dateFormat = (data: string): string => {
    const date: Date = new Date(data);
    const day: string = ("0" + date.getDate()).slice(-2);
    const month: string = ("0" + (date.getMonth() + 1)).slice(-2);
    const year: string = date.getFullYear().toString();
    return `${day}/${month}/${year}`;
  };

  return (
    <LayoutAdmin>
      <div>
        {/* showAlert */}
        {showAlert && <AlertDeleteSuccess />}
        <h1 className="uppercase font-bold bg-gradient-to-r from-[#0083CA] via-green-400 to-[#0083CA] text-white py-1 px-4 rounded-md shadow-lg border border-gray-300 focus:outline-none focus:ring-2">
          {pageTitle}
        </h1>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="relative my-4 shadow-lg">
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 rounded-lg py-2 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-[#0083CA] focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span>
                <FcSearch size={30} />
              </span>
            </div>
          </div>
          <div className="my-4">
            <Link href={`${linkURL}/create`}>
              <button className="flex flex-row justify-center items-center uppercase rounded-md border border-gray-500 focus:outline-none focus:ring-2 px-4 py-2.5 text-sm font-medium hover:text-white hover:hover:bg-gradient-to-r hover:from-sky-400 hover:via-rose-400 hover:to-lime-400 hover:shadow-xl transition-all ease-in-out">
                <AiOutlinePlus size={18} className="mr-1" />
                Add
              </button>
            </Link>
          </div>
        </div>
        <div className="relative overflow-x-auto shadow-md rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-black">
            <thead className="text-xs text-white font-semibold uppercase bg-gradient-to-r from-[#0083CA] via-green-400 to-[#0083CA]">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Title
                </th>
                {showCategorys && (
                  <th scope="col" className="px-6 py-3">
                    Category
                  </th>
                )}
                {showStatuss && (
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                )}
                <th scope="col" className="px-6 py-3">
                  Created At
                </th>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Edit</span>
                </th>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Delete</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredData && filteredData.length === 0 ? (
                <tr className="bg-white border-b hover:bg-gray-200">
                  <td colSpan={6} className="text-center py-4">
                    No data found
                  </td>
                </tr>
              ) : (
                filteredData &&
                filteredData.map((data: any) => (
                  <tr
                    key={data.id}
                    className="bg-white border-b hover:bg-gray-200"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
                    >
                      {data.title}
                    </th>
                    {showCategorys && (
                      <td className="px-6 py-4">{data.category.title}</td>
                    )}
                    {showStatuss && (
                      <td className="px-6 py-4">{data.status}</td>
                    )}
                    <td className="px-6 py-4">{dateFormat(data.createdAt)}</td>
                    <td className="px-6 py-4">
                      <Link
                        href={`${linkURL}/${data.slug}`}
                        title="Edit"
                        className="font-medium text-blue-500 hover:text-blue-600 flex flex-row justify-center items-center"
                      >
                        <RiEditBoxLine size={25} />
                      </Link>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => {
                          setIsOpenPopUpDelete(!isOpenPopUpDelete),
                            setValueDataDelete(data.id);
                        }}
                        title="Delete"
                        className="text-red-600 hover:text-red-800 flex flex-row justify-center items-center"
                      >
                        <RiDeleteBinLine size={25} />
                      </button>
                      {isOpenPopUpDelete && (
                        <div>
                          <PopUpBTN
                            description="Are you sure you want to delete this?"
                            onClickYes={() => handelDelete(valueDataDelete)}
                            onClickNo={() =>
                              setIsOpenPopUpDelete(!isOpenPopUpDelete)
                            }
                          />
                        </div>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        {/* Paginate table */}
        <div className="flex justify-center md:justify-end py-4">
          <Pagination
            page={page}
            perPage={perPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </LayoutAdmin>
  );
}
