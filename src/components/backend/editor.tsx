import axios from "axios";
import dynamic from "next/dynamic";
import "suneditor/dist/css/suneditor.min.css";

const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

interface EditorProps {
  value: string;
  onChange: (content: string) => void;
}

export default function Editor({ value, onChange }: EditorProps) {
  const handleImageUpload = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    try {
      const response = await axios.post(`/api/uploadcloudinary`, formData);
      console.log(response);
      const imageUrl = response.data.secure_url;
      console.log(imageUrl);
      return imageUrl;
    } catch (err) {
      console.log(err);
      return null;
    }
  };

  return (
    <div>
      <SunEditor
        lang="en"
        height={"auto"}
        placeholder={"Type here...."}
        setDefaultStyle="font-size: 16px;"
        defaultValue={value}
        onChange={onChange}
        setOptions={{
          buttonList: [
            ["image", "video", "link"],
            ["bold", "underline", "italic", "strike"],
            ["align", "list", "lineHeight"],
            ["fontColor", "hiliteColor"],
          ],
        }}
        onImageUploadBefore={(
          files: File[],
          _info: any,
          uploadHandler: Function
        ) => {
          const file = files[0];
          handleImageUpload(file).then((imageUrl) => {
            if (imageUrl) {
              const response = {
                result: [
                  {
                    url: `${imageUrl}`,
                    name: files[0].name,
                    size: files[0].size,
                  },
                ],
              };
              uploadHandler(response);
            }
          });
        }}
      />
    </div>
  );
}
