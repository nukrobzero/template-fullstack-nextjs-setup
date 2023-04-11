import React from "react";
import dynamic from "next/dynamic";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File

const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

const MyComponent: React.FC = (props) => {
  return (
    <div>
      <p> My Other Contents </p>
      <SunEditor
        lang="en"
        height={"auto"}
        placeholder={"Type here...."}
        setOptions={{
          resizingBar: false,
          buttonList: [
            [
              "formatBlock",
              "bold",
              "underline",
              "italic",
              "strike",
              "blockquote",
              "showBlocks",
              "fontColor",
              "hiliteColor",
              "align",
              "list",
              "table",
              "link",
              "image",
              "video",
              "removeFormat",
            ],
          ],
        }}
      />
    </div>
  );
};
export default MyComponent;
