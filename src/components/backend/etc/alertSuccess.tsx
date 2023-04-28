import { IoMdAlert } from "react-icons/io";

interface Props {
  type: string;
}

export default function AlertSuccess({ type }: Props) {
  return (
    <div className="fixed top-10 right-10 z-50 transition-all ease-in duration-400">
      <div
        className="flex flex-row justify-center items-center space-x-2 p-8 mb-4 text-sm font-semibold text-green-800 border border-green-300 rounded-lg bg-green-400 bg-opacity-90"
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