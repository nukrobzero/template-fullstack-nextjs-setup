import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import LayoutAdmin from "../layout/layout";
import Form1 from "./form/form1";

type Props = {
  page: any;
  apiurl: string;
  titlePage: string;
};

export default function ServiceForm({ page, apiurl, titlePage }: Props) {
  const router = useRouter();

  const [showForm, setShowForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [selectedForm, setSelectedForm] = useState("");

  const [title, setTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [files, setFiles] = useState("");
  const [filesBg, setFilesBg] = useState("");
  const [content, setContent] = useState("");
  console.log(files)
  console.log(filesBg)
  const [values, setValues] = useState(
    selectedForm === "form1"
      ? {
          id: "",
          title: "",
          metaDescription: "",
          coverImage: "",
          backgroundImage: "",
          content: "",
        }
      : {
          id: "",
          title: "",
          metaDescription: "",
          coverImage: "",
          backgroundImage: "",
          content: "",
        }
  );


  const handleFormSelect = (e: any) => {
    setSelectedForm(e.target.value);
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value }: any = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleContentChange = (content: any) => {
    setValues((prevValues) => ({
      ...prevValues,
      content: content,
    }));
  };

  const handlePageSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    if (!title) return;
    const formData = new FormData();
    formData.append("title", title);
    formData.append("metaDescription", metaDescription);
    formData.append("content", content);
    if (files?.[0]) {
      formData.append("coverImage", files[0]);
    }
    if (filesBg?.[0]) {
      formData.append("backgroundImage", filesBg[0]);
    }
    e.preventDefault();

    try {
      await axios.post(apiurl, formData);
      router.reload();
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    if (!values.title) return;
    const formData = new FormData();
    formData.set("id", values.id);
    formData.set("title", values.title);
    formData.set("metaDescription", values.metaDescription);
    formData.set("coverImage", values.coverImage);
    formData.set("content", values.content);
    if (files?.[0]) {
      formData.set("file", files[0]);
    }

    e.preventDefault();

    try {
      await axios.put(apiurl, formData);
      router.reload();
    } catch (e) {
      console.error(e);
    }
  };

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
        <div>
          <h1>Hi this {titlePage} page</h1>
          <div className="flex h-full w-full items-center justify-center">
            <table className=" w-[800px] text-left text-sm text-gray-500 dark:text-gray-400">
              <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Title
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
                {page.map((data: any) => (
                  <tr
                    key={data.id}
                    className="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
                  >
                    <td
                      scope="row"
                      className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                    >
                      <Link href={`/dashboard/service/${data.slug}`}>
                        {data.title}
                      </Link>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => {
                          setValues(data),
                            setShowEditForm(true),
                            setShowForm(true);
                        }}
                        className="font-medium text-green-600 hover:underline dark:text-green-500"
                      >
                        Edit
                      </button>
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
        </div>
        <div className="mt-5 flex items-center justify-center">
          <button
            onClick={() => setShowForm(true)}
            className="mr-2 mb-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add New Page
          </button>
        </div>
        {showForm && (
          <div className="fixed top-0 left-0 flex h-full w-full items-center justify-center bg-gray-800 bg-opacity-75">
            <div className="rounded-lg bg-white p-8 shadow-lg">
              <div className="flex flex-row justify-between">
                <h2 className="mb-4 text-lg font-bold">Select Form</h2>
                <AiOutlineClose
                  className=" cursor-pointer"
                  size={20}
                  onClick={() => {
                    setShowForm(false), setShowEditForm(false);
                  }}
                />
              </div>
              <select value={selectedForm} onChange={handleFormSelect}>
                <option value={``}>Please Select</option>
                <option value={`form1`}>Form1</option>
                <option value={`form2`}>Form2</option>
              </select>
              {selectedForm === "form1" && (
                <Form1
                  onSubmit={showEditForm ? handleUpdate : handlePageSubmit}
                  formTitle="Form1"
                  onClick={() => {
                    setShowForm(false),
                      setSelectedForm(""),
                      setShowEditForm(false),
                      setValues({
                        id: "",
                        title: "",
                        metaDescription: "",
                        coverImage: "",
                        backgroundImage: "",
                        content: "",
                      }),
                      setTitle(""),
                      setMetaDescription(""),
                      setFiles(""),
                      setFilesBg(""),
                      setContent("");
                  }}
                  onChange={
                    showEditForm
                      ? handleOnChange
                      : (e: any) => setTitle(e.target.value)
                  }
                  onChangeMeta={(e: any) => setMetaDescription(e.target.value)}
                  onChangeDescription={(e: any) => setContent(e.target.value)}
                  onChangeImg1={(e: any) => setFiles(e.target.files)}
                  onChangeImgBg={(e: any) => setFilesBg(e.target.files)}
                  value={showEditForm ? values.title : title}
                  valuemeta={
                    showEditForm ? values.metaDescription : metaDescription
                  }
                  valueDescription={showEditForm ? values.content : content}
                  btnName={showEditForm ? "Update" : "Create"}
                />
              )}
            </div>
          </div>
        )}
      </div>
    </LayoutAdmin>
  );
}
