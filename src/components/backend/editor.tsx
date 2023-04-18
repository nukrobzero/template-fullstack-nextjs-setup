import dynamic from "next/dynamic";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File

const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

interface EditorProps {
  value: string;
  onChange: (content: string) => void;
}

export default function Editor({ value, onChange }: EditorProps) {
  const serializer = (html: string) => {
    // Modify the HTML string here to add Tailwind CSS classes
    const modifiedHtml = html.replace(/<p>/g, '<p class="text-red-500">');
    return modifiedHtml;
  };
  
  return (
    <div>
      <SunEditor
        lang="en"
        height={"auto"}
        placeholder={"Type here...."}
        setDefaultStyle="font-size: 16px;"
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
