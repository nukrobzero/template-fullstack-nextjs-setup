import dynamic from "next/dynamic";
import { ImageResize } from "quill-image-resize-module-ts";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

interface Props {
  value: any;
  onChange: any;
}

export default function Editor({ value, onChange }: Props) {
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ size: ["small", false, "large", "huge"] }],
      [{font:[]}],
      [
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        { color: [] },
        { background: [] },
      ],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
        { align: [] },
      ],
      ["image", "link", "video", "formula"],
      ["code-block"],
      ["clean"],
    ],
  };

  return (
    <div className=" h-auto">
      <ReactQuill
        value={value}
        theme={"snow"}
        onChange={onChange}
        modules={modules}
      />
    </div>
  );
}
