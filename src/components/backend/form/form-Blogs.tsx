import Editor from "@/components/backend/editor";
import LayoutAdmin from "@/components/backend/layout/layout";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import AlertSuccess from "../etc/alertSuccess";

interface Props {
  page: any;
  category: any;
  type: string;
}

export default function FormBlog({ page, category, type }: Props) {
  const router = useRouter();
  const [showupload, setShowupload] = useState(false);
  const [content, setContent] = useState(
    page === undefined ? "" : page.content
  );
  const [title, setTitle] = useState(page === undefined ? "" : page.title);
  const [files, setFiles] = useState("");
  const [description, setDescription] = useState(
    page === undefined ? "" : page.description
  );
  const [keywords, setKeywords] = useState(
    page === undefined ? "" : page.keywords
  );
  const [date, setDate] = useState(
    page === undefined ? new Date().toISOString().substr(0, 10) : page.date
  );
  const [status, setStatus] = useState(
    page === undefined ? "Published" : page.status
  );
  const [categoryId, setCategoryId] = useState(
    page === undefined ? "" : page.categoryId
  );

  const [isFormValid, setIsFormValid] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  // Check if all required fields have been filled in
  const requiredFieldsFilledIn =
    title.trim() !== "" &&
    content.trim() !== "" &&
    description.trim() !== "" &&
    keywords.trim() !== "" &&
    categoryId.trim() !== "";

  if (isFormValid !== requiredFieldsFilledIn) {
    setIsFormValid(requiredFieldsFilledIn);
  }

  const hendelCreate = async (e: React.FormEvent) => {
    if (!title) return;
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("description", description);
    formData.append("date", date);
    formData.append("keywords", keywords);
    formData.append("categoryId", categoryId);
    formData.append("status", status);
    if (files?.[0]) {
      formData.append("file", files[0]);
    }
    e.preventDefault();
    try {
      const res = await axios.post(`/api/dashboard/blog`, formData);
      if (res) {
        setShowAlert(!showAlert);
        setTimeout(() => {
          router.push("/dashboard/blogs");
        }, 1000);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    if (!title) return;
    const formData = new FormData();
    formData.append("id", page.id);
    formData.append("title", title);
    formData.append("content", content);
    formData.append("description", description);
    formData.append("date", date);
    formData.append("keywords", keywords);
    formData.append("categoryId", categoryId);
    formData.append("status", status);
    formData.append("coverImage", page.coverImage);
    if (files?.[0]) {
      formData.append("file", files[0]);
    }

    e.preventDefault();

    try {
      const res = await axios.put(`/api/dashboard/blog`, formData);
      if (res) {
        setShowAlert(!showAlert);
        setTimeout(() => {
          router.push("/dashboard/blogs");
        }, 1000);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <LayoutAdmin>
      <div>
        <div className="max-w-screen-lg mx-auto">
          {/* showAlert */}
          {showAlert && <AlertSuccess type={type} />}
          <form
            onSubmit={page === undefined ? hendelCreate : handleUpdate}
            className="flex flex-col justify-center space-y-4 mt-4 bg-white p-12 rounded-lg shadow-lg"
          >
            <div className="bg-gradient-to-r from-[#0083CA] via-green-400 to-[#0083CA] rounded-lg text-white py-2 px-4 shadow-lg flex items-center cursor-default mb-4">
              <h1 className="text-xl font-semibold">{type} Blog</h1>
            </div>
            <div className="space-y-2">
              <label className="font-bold">Title</label>
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Title"
                value={title}
                onChange={(e: any) => setTitle(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#0083CA] focus:border-transparent"
              />
            </div>
            <div className="space-y-2">
              <label className="font-bold">Description</label>
              <textarea
                name="description"
                id="description"
                placeholder="Description"
                rows={2}
                maxLength={160}
                value={description}
                onChange={(e: any) => setDescription(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#0083CA] focus:border-transparent"
              />
            </div>
            <div className="space-y-2">
              <label className="font-bold">Keywords SEO</label>
              <input
                type="text"
                name="keywords"
                id="keywords"
                placeholder="Keywords for SEO"
                maxLength={160}
                value={keywords}
                onChange={(e: any) => setKeywords(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#0083CA] focus:border-transparent"
              />
            </div>
            <div className="space-y-2">
              <label className="font-bold">Category</label>
              <select
                className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#0083CA] focus:border-transparent"
                required
                onChange={(e: any) => setCategoryId(e.target.value)}
                value={categoryId}
              >
                <option value="">Please Select</option>
                {category?.map((data: any) => (
                  <option key={data.id} value={data.id}>
                    {data.title}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <label className="font-bold">Date</label>
              <input
                type="date"
                name="date"
                id="date"
                value={date}
                onChange={(e: any) => setDate(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#0083CA] focus:border-transparent"
              />
            </div>
            <div className="space-y-2">
              <label className="font-bold">Cover Image</label>
              {page === undefined ? (
                <div>
                  <input
                    type="file"
                    accept=".jpg,.jpeg,.png,.webp"
                    onChange={(e: any) => setFiles(e.target.files)}
                    required
                    className="block w-full border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-white hover:dark:border-gray-600 dark:placeholder-gray-400"
                  />
                  <p className="mt-1 text-xs" id="file_input_help">
                    PNG, JPG or WEBP (MAX. 800x400px).
                  </p>
                </div>
              ) : (
                <div>
                  <div
                    className={showupload === false ? "space-y-2" : "hidden"}
                  >
                    <Image
                      src={`/${page.coverImage}`}
                      width={150}
                      height={150}
                      alt={page.title}
                      className="rounded-md"
                    />
                    <button
                      onClick={() => setShowupload(true)}
                      className="bg-orange-300 py-2 px-4 rounded-sm"
                    >
                      Change image
                    </button>
                  </div>
                  {showupload && (
                    <div className="space-y-2">
                      <input
                        type="file"
                        accept=".jpg,.jpeg,.png,.webp"
                        onChange={(e: any) => setFiles(e.target.files)}
                        required
                        className="block w-full border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-white hover:dark:border-gray-600 dark:placeholder-gray-400"
                      />
                      <p className="mt-1 text-xs" id="file_input_help">
                        PNG, JPG or WEBP (MAX. 800x400px).
                      </p>
                      <button
                        onClick={() => setShowupload(false)}
                        className="bg-green-200 py-2 px-4 rounded-sm"
                      >
                        Cancel
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
            <div>
              <Editor value={content} onChange={setContent} />
            </div>
            <div>
              <select
                value={status}
                onChange={(e: any) => setStatus(e.target.value)}
                className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#0083CA] focus:border-transparent"
              >
                <option value="Published">Published</option>
                <option value="Draft">Draft</option>
              </select>
            </div>
            <div className="text-center space-x-4 pt-6">
              <button
                disabled={!isFormValid}
                type="submit"
                className={`rounded py-2 px-4 font-bold text-white ${
                  isFormValid
                    ? "bg-gradient-to-r from-sky-400 via-rose-400 to-lime-400 hover:bg-gradient-to-r hover:from-sky-500 hover:via-rose-500 hover:to-lime-500 hover:shadow-xl transition-all ease-in-out cursor-pointer"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
              >
                {type}
              </button>
              <Link href={`/dashboard/blogs`}>
                <button
                  type="button"
                  className="rounded-md border border-gray-500 focus:outline-none focus:ring-2 px-4 py-2.5 text-sm font-medium hover:text-white hover:bg-gradient-to-r from-green-300 to-purple-400 hover:shadow-xl transition-all ease-in-out"
                >
                  Cancel
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </LayoutAdmin>
  );
}
