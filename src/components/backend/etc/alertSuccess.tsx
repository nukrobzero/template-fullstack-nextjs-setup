import { IoMdAlert } from "react-icons/io";

interface Props {
  type: string;
}

export default function AlertSuccess({ type }: Props) {
  return (
    <div className="fixed top-10 right-10 z-50 transition-all ease-in duration-400">
      <div
        className={`flex flex-row justify-center items-center space-x-2 p-8 mb-4 text-sm font-semibold text-white border ${
          type === "Create"
            ? "border-green-300 bg-green-500"
            : "border-blue-300 bg-blue-500"
        } rounded-lg  bg-opacity-90`}
        role="alert"
      >
        <IoMdAlert size={30} />
        <span className="sr-only">Info</span>
        <div>
          <span className="font-medium text-base">{type} Success!</span>
        </div>
      </div>
    </div>
  );
}
