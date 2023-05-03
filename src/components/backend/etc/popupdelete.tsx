interface Props {
  onClickYes: any;
  onClickNo: any;
  description: string;
}

export default function PopUpBTN({
  onClickYes,
  onClickNo,
  description,
}: Props) {
  return (
    <div>
      <div className="fixed top-0 left-0 flex h-full w-full items-center justify-center bg-gray-800 bg-opacity-50 z-[99]">
        <div className="flex flex-col justify-center items-center bg-white w-auto h-44 p-16 rounded-lg space-y-8 transition-all ease-in-out">
          <h1 className="text-2xl font-bold">{description}</h1>
          <div className="space-x-4">
            <button
              onClick={onClickYes}
              className="test-sm font-semibold text-white bg-red-600 hover:bg-red-700 rounded-lg px-4 py-2"
            >
              <span>Yes, I&apos;m sure</span>
            </button>
            <button
              onClick={onClickNo}
              className="test-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg px-4 py-2"
            >
              <span>No, cancel</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
