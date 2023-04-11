import { AiOutlineClose } from "react-icons/ai";

interface Form1Props {
  onSubmit: any;
  formTitle: string;
  onClick: any;
  onChange: any;
  onChangeMeta: any;
  onChangeDescription: any;
  onChangeImg1: any;
  onChangeImgBg: any
  value: string;
  valuemeta: string;
  valueDescription: string;
  btnName: string;
}

export default function Form1({
  onSubmit,
  formTitle,
  onClick,
  onChange,
  onChangeMeta,
  onChangeDescription,
  onChangeImg1,
  onChangeImgBg,
  value,
  valuemeta,
  valueDescription,
  btnName,
}: Form1Props) {
  return (
    <div className="fixed top-0 left-0 flex h-full w-full items-center justify-center bg-gray-800 bg-opacity-75">
      <form onSubmit={onSubmit} className="rounded-lg bg-white p-8 shadow-lg">
        <div className="flex flex-row justify-between">
          <h2 className="mb-4 text-lg font-bold">{formTitle}</h2>
          <AiOutlineClose
            className=" cursor-pointer"
            size={20}
            onClick={onClick}
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Title"
            value={value}
            required
            onChange={onChange}
            className="w-full rounded-lg border px-4 py-2"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            id="metaDescription"
            name="metaDescription"
            placeholder="metaDescription"
            value={valuemeta}
            required
            onChange={onChangeMeta}
            className="w-full rounded-lg border px-4 py-2"
          />
        </div>
        <div className="mb-4">
          <label>CoverImage</label>
          <input
            type="file"
            name="CoverImage"
            accept=".jpg,.jpeg,.png,.webp"
            onChange={onChangeImg1}
            required
          />
        </div>
        <div className="mb-4">
          <label>BackgroundImage</label>
          <input
            type="file"
            name="BackgroundImage"
            accept=".jpg,.jpeg,.png,.webp"
            onChange={onChangeImgBg}
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            id="Description"
            name="Description"
            placeholder="Description"
            value={valueDescription}
            required
            onChange={onChangeDescription}
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
