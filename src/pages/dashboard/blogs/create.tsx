import Editor from "@/components/backend/editor";
import LayoutAdmin from "@/components/backend/layout/layout";
import axios from "axios";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { prisma } from "@/lib/prismadb";

interface Props {
  category: any;
}

export default function CreateBlog({ category }: Props) {
  const router = useRouter();
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [files, setFiles] = useState("");
  const [description, setDescription] = useState("");
  const [keywords, setKeywords] = useState("");
  const [date, setDate] = useState(new Date().toISOString().substr(0, 10));
  const [status, setStatus] = useState("Published");
  const [categoryId, setCategoryId] = useState("");

  const [isFormValid, setIsFormValid] = useState(false);

  const hendelSubmit = async (e: React.FormEvent) => {
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
      await axios.post(`/api/dashboard/blog`, formData);
      router.push("/dashboard/blogs");
    } catch (error) {
      console.error(error);
    }
  };

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

  return (
    <LayoutAdmin>
      <div>
        <div className="max-w-screen-md mx-auto">
          <div className="md:py-12">
            <h1 className="text-2xl font-semibold">Create Blog</h1>
          </div>
          <form
            onSubmit={hendelSubmit}
            className="flex flex-col justify-center space-y-4 mt-4"
          >
            <div>
              <label className="font-bold">Title</label>
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Title"
                value={title}
                onChange={(e: any) => setTitle(e.target.value)}
                required
                className="w-full rounded-lg border px-4 py-2"
              />
            </div>
            <div>
              <label className="font-bold">Description</label>
              <input
                type="text"
                name="description"
                id="description"
                placeholder="Description"
                maxLength={160}
                value={description}
                onChange={(e: any) => setDescription(e.target.value)}
                required
                className="w-full rounded-lg border px-4 py-2"
              />
            </div>
            <div>
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
                className="w-full rounded-lg border px-4 py-2"
              />
            </div>
            <div>
              <label className="font-bold">Category :</label>
              <select
                className="w-full rounded-lg border px-4 py-2"
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
            <div>
              <label className="font-bold">Date</label>
              <input
                type="date"
                name="date"
                id="date"
                value={date}
                onChange={(e: any) => setDate(e.target.value)}
                required
                className="w-full rounded-lg border px-4 py-2"
              />
            </div>
            <div>
              <label className="font-bold">Cover Image</label>
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
            <div>
              <Editor value={content} onChange={setContent} />
            </div>
            <div>
              <select
                value={status}
                onChange={(e: any) => setStatus(e.target.value)}
                className="w-full rounded-lg border px-4 py-2"
              >
                <option value="Published">Published</option>
                <option value="Draft">Draft</option>
              </select>
            </div>
            <div className="text-center space-x-4">
              <button
                disabled={!isFormValid}
                type="submit"
                className={`rounded py-2 px-4 font-bold text-white ${
                  isFormValid
                    ? "bg-blue-500 hover:bg-blue-700 cursor-pointer"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
              >
                Create
              </button>
              <Link href={`/dashboard/blogs`}>
                <button
                  type="button"
                  className="rounded bg-green-400 py-2 px-4 font-bold text-white hover:bg-green-700"
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

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await prisma.category.findMany();
  const category = JSON.parse(JSON.stringify(res));
  return {
    props: { category },
  };
};