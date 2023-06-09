// import axios from "axios";
// import Link from "next/link";
// import { useRouter } from "next/router";
// import { useState } from "react";
// import { AiOutlineClose } from "react-icons/ai";
// import Image from "next/image";
// import Editor from "./editor";
// import LayoutAdmin from "./layout/layout";

// type Props = {
//   page: any;
//   apiurl: string;
//   titlePage: string;
// };

// export default function ServiceForm({ page, apiurl, titlePage }: Props) {
//   const router = useRouter();
//   const [showForm, setShowForm] = useState(false);
//   const [title, setTitle] = useState("");
//   const [showEditForm, setShowEditForm] = useState(false);
//   const [files, setFiles] = useState("");
//   const [content, setContent] = useState("");
//   const [values, setValues] = useState({
//     id: "",
//     title: "",
//     cover: "",
//     content: "",
//   });

//   const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value }: any = e.target;
//     setValues((prevValues) => ({
//       ...prevValues,
//       [name]: value,
//     }));
//   };

//   const handleContentChange = (content: any) => {
//     setValues((prevValues) => ({
//       ...prevValues,
//       content: content,
//     }));
//   };

//   const handlePageSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     if (!title) return;
//     const formData = new FormData();
//     formData.set("title", title);
//     formData.set("content", content);
//     if (files?.[0]) {
//       formData.set("file", files[0]);
//     }
//     e.preventDefault();

//     try {
//       await axios.post(apiurl, formData);
//       router.reload();
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
//     if (!values.title) return;
//     const formData = new FormData();
//     formData.set("id", values.id);
//     formData.set("title", values.title);
//     formData.set("cover", values.cover);
//     formData.set("content", values.content);
//     if (files?.[0]) {
//       formData.set("file", files[0]);
//     }

//     e.preventDefault();

//     try {
//       await axios.put(apiurl, formData);
//       router.reload();
//     } catch (e) {
//       console.error(e);
//     }
//   };

//   const handelDelete = async (id: string) => {
//     try {
//       await axios.delete(`${apiurl}/${id}`);
//       router.reload();
//     } catch (e) {
//       console.error(e);
//     }
//   };

//   return (
//     <LayoutAdmin>
//       <div>
//         <div>
//           <h1>Hi this {titlePage} page</h1>
//           <div className="flex h-full w-full items-center justify-center">
//             <table className=" w-[800px] text-left text-sm text-gray-500 dark:text-gray-400">
//               <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
//                 <tr>
//                   <th scope="col" className="px-6 py-3">
//                     Title
//                   </th>
//                   <th scope="col" className="px-6 py-3">
//                     Edit
//                   </th>
//                   <th scope="col" className="px-6 py-3">
//                     Delete
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {page.map((data: any) => (
//                   <tr
//                     key={data.id}
//                     className="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
//                   >
//                     <td
//                       scope="row"
//                       className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
//                     >
//                       <Link href={`/dashboard/service/${data.slug}`}>
//                         {data.title}
//                       </Link>
//                     </td>
//                     <td className="px-6 py-4">
//                       <button
//                         onClick={() => {
//                           setValues(data),
//                             setShowEditForm(true),
//                             setShowForm(true);
//                         }}
//                         className="font-medium text-green-600 hover:underline dark:text-green-500"
//                       >
//                         Edit
//                       </button>
//                     </td>
//                     <td className="px-6 py-4">
//                       <button
//                         onClick={() => handelDelete(data.id)}
//                         className="font-medium text-blue-600 hover:underline dark:text-blue-500"
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//         <div className="mt-5 flex items-center justify-center">
//           <button
//             onClick={() => setShowForm(true)}
//             className="mr-2 mb-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//           >
//             Add New Page
//           </button>
//         </div>
//         {showForm && (
//           <div className="fixed top-0 left-0 flex h-full w-full items-center justify-center bg-gray-800 bg-opacity-75">
//             <form
//               onSubmit={showEditForm ? handleUpdate : handlePageSubmit}
//               className="rounded-lg bg-white p-8 shadow-lg"
//             >
//               <div className="flex flex-row justify-between">
//                 <h2 className="mb-4 text-lg font-bold">
//                   {showEditForm ? "Update Page" : "Create Page"}
//                 </h2>
//                 <AiOutlineClose
//                   className=" cursor-pointer"
//                   size={20}
//                   onClick={() => {
//                     setShowForm(false),
//                       setShowEditForm(false),
//                       setValues({ id: "", title: "", cover: "", content: "" });
//                   }}
//                 />
//               </div>
//               <div className="mb-4">
//                 <input
//                   type="text"
//                   id="title"
//                   name="title"
//                   placeholder="Title"
//                   value={showEditForm ? values.title : title}
//                   required
//                   onChange={
//                     showEditForm
//                       ? handleOnChange
//                       : (e: any) => setTitle(e.target.value)
//                   }
//                   className="w-full rounded-lg border px-4 py-2"
//                 />
//               </div>
//               <div className="mb-4">
//                 <input
//                   type="file"
//                   accept=".jpg,.jpeg,.png,.webp"
//                   onChange={(e: any) => setFiles(e.target.files)}
//                 />
//                 {showEditForm && (
//                   <div className="mt-4">
//                     {values.cover === "" ? (
//                       <Image
//                         src={`/No_Image_Available.jpg`}
//                         width={300}
//                         height={300}
//                         alt="No-Image-Available"
//                       />
//                     ) : (
//                       <Image
//                         src={`/${values.cover}`}
//                         width={300}
//                         height={300}
//                         alt={values.title}
//                       />
//                     )}
//                   </div>
//                 )}
//               </div>
//               <div className="mb-4">
//                 <Editor
//                   value={showEditForm ? values.content : content}
//                   onChange={showEditForm ? handleContentChange : setContent}
//                 />
//               </div>
//               <div className="text-right">
//                 <button
//                   type="submit"
//                   className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
//                 >
//                   {showEditForm ? "Update" : "Create"}
//                 </button>
//               </div>
//             </form>
//           </div>
//         )}
//       </div>
//     </LayoutAdmin>
//   );
// }
