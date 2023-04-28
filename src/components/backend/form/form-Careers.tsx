import Editor from "@/components/backend/editor";
import LayoutAdmin from "@/components/backend/layout/layout";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import AlertSuccess from "../etc/alertSuccess";

interface Props {
  page: any;
  type: string;
}

export default function FormCareers({ page, type }: Props) {
  const router = useRouter();
  const [content, setContent] = useState(
    page === undefined ? "" : page.content
  );
  const [title, setTitle] = useState(page === undefined ? "" : page.title);
  const [description, setDescription] = useState(
    page === undefined ? "" : page.description
  );
  const [status, setStatus] = useState(
    page === undefined ? "Published" : page.status
  );
  const [jobtype, setJobType] = useState(
    page === undefined ? "" : page.jobtype
  );

  const [isFormValid, setIsFormValid] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  // Check if all required fields have been filled in
  const requiredFieldsFilledIn =
    title.trim() !== "" &&
    content.trim() !== "" &&
    description.trim() !== "" &&
    jobtype.trim() !== "";

  if (isFormValid !== requiredFieldsFilledIn) {
    setIsFormValid(requiredFieldsFilledIn);
  }

  const hendelCreate = async (e: React.FormEvent) => {
    if (!title) return;
    const data = {
      title,
      content,
      description,
      status,
      jobtype,
    };

    e.preventDefault();
    try {
      const res = await axios.post(`/api/dashboard/careers`, data);
      if (res) {
        setShowAlert(!showAlert);
        setTimeout(() => {
          router.push("/dashboard/careers");
        }, 1000);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    if (!title) return;
    const data = {
      id: page.id,
      title,
      content,
      description,
      status,
      jobtype,
    };

    e.preventDefault();

    try {
      const res = await axios.put(`/api/dashboard/careers`, data);
      if (res) {
        setShowAlert(!showAlert);
        setTimeout(() => {
          router.push("/dashboard/careers");
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
              <h1 className="text-xl font-semibold">{type} Career</h1>
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
              <label className="font-bold">JobType</label>
              <select
                className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#0083CA] focus:border-transparent"
                required
                onChange={(e: any) => setJobType(e.target.value)}
                value={jobtype}
              >
                <option value="">Please Select</option>
                <option className="uppercase" value="Full Time">
                  FULL TIME
                </option>
                <option className="uppercase" value="Part Time">
                  PART TIME
                </option>
                <option className="uppercase" value="Urgently Required">
                  Urgently Required
                </option>
              </select>
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
              <Link href={`/dashboard/careers`}>
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
