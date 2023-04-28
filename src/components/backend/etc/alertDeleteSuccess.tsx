import { IoMdAlert } from "react-icons/io";

export default function AlertDeleteSuccess() {
  return (
    <div className="fixed top-10 right-10 z-50 transition-all ease-in duration-400">
      <div
        className="flex flex-row justify-center items-center space-x-2 p-8 mb-4 text-sm font-semibold text-red-800 border border-red-300 rounded-lg bg-red-50 bg-opacity-90"
        role="alert"
      >
        <IoMdAlert size={30} />
        <span className="sr-only">Info</span>
        <div>
          <span className="font-medium text-base">Delete Success!</span>
        </div>
      </div>
    </div>
  );
}
