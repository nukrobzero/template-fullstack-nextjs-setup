import axios from "axios";

export default function Test() {
  const handleUpload = async (files: any) => {
    const formData = new FormData();
    formData.append("file", files);

    try {
      const res = await axios.post(`/api/testupload`, formData);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <input
        type="file"
        onChange={(e: any) => {
          handleUpload(e.target.files[0]);
        }}
      />
    </div>
  );
}
//https://api.cloudinary.com/v1_1/dt1otb3h7/image/upload
