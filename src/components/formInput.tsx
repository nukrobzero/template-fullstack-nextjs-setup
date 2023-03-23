import { AiOutlineClose } from "react-icons/ai";

interface Props {
  id: string;
  name: string;
  value: any;
  onClick: any;
  onSubmit: any;
  onChange: any;
  btnName: string;
  titleName: string;
}

export default function FormInput({
  id,
  name,
  value,
  onClick,
  onSubmit,
  onChange,
  btnName,
  titleName,
}: Props) {
  return (
    <div className="fixed top-0 left-0 flex h-full w-full items-center justify-center bg-gray-800 bg-opacity-75">
      <form onSubmit={onSubmit} className="rounded-lg bg-white p-8 shadow-lg">
        <div className="flex flex-row justify-between">
          <h2 className="mb-4 text-lg font-bold">{titleName}</h2>
          <AiOutlineClose
            className=" cursor-pointer"
            size={20}
            onClick={onClick}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="title" className="mb-2 block font-bold text-gray-700">
            Title
          </label>
          <input
            type="text"
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            className="w-full rounded-lg border px-4 py-2"
          />
        </div>
        <div className="text-right">
          <button
            type="submit"
            className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
          >
            {btnName}
          </button>
        </div>
      </form>
    </div>
  );
}