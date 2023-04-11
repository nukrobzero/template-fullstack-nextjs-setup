import React from "react";
import dynamic from "next/dynamic";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File

const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

interface EditorProps {
  value: string;
  onChange: any;
}

export default function Editor({ value, onChange }: EditorProps) {
  return (
    <div>
      <SunEditor
        lang="en"
        height={"auto"}
        placeholder={"Type here...."}
        setOptions={{
          resizingBar: false,
          buttonList: [
            [
              "undo",
              "redo",
              "formatBlock",
              "fontSize",
              "paragraphStyle",
              "blockquote",
              "bold",
              "underline",
              "italic",
              "strike",
              "subscript",
              "superscript",
              "fontColor",
              "hiliteColor",
              "textStyle",
              "removeFormat",
              "outdent",
              "indent",
              "align",
              "horizontalRule",
              "list",
              "lineHeight",
              "table",
              "link",
              "image",
              "video",
              "fullScreen",
              "showBlocks",
              "codeView",
              "preview",
              "print",
            ],
          ],
        }}
        defaultValue={value}
        onChange={onChange}
      />
    </div>
  );
}
