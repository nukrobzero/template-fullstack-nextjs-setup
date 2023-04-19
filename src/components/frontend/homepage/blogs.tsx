import Sections from "@/components/layoutpage";
import BlogGrid from "./blogs/blogsGrid";

export default function BlogHome() {
  return (
    <div className="md:h-[600px] bg-[#F4F4F4]">
      <Sections>
        <div className="mx-auto flex flex-col justify-center items-center md:h-[600px] py-8">
          <div className="flex flex-col justify-center items-center space-y-4">
            <h1 className="uppercase text-[#0083CA] font-bold">blog</h1>
            <h1 className="text-4xl font-bold">
              Latest <span className="text-[#0083CA]">Posts</span>
            </h1>
            <p>อัพเดททุกเทรนด์เทคโนโลยีอุตสาหกรรม</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 justify-center items-center py-12">
            <BlogGrid
              src="/home/blog/shutterstock_217841458-1.jpg"
              alt="imgBlog"
              category="UNCATEGORIZED"
              url="#"
              details="Proactive Maintenance การบำรุงรักษาเชิงรุก
                กุญแจสู่ความสำเร็จของการผลิต"
            />
            <BlogGrid
              src="/home/blog/shutterstock_217841458-1.jpg"
              alt="imgBlog"
              category="UNCATEGORIZED"
              url="#"
              details="Proactive Maintenance การบำรุงรักษาเชิงรุก
                กุญแจสู่ความสำเร็จของการผลิต"
            />
            <BlogGrid
              src="/home/blog/shutterstock_217841458-1.jpg"
              alt="imgBlog"
              category="UNCATEGORIZED"
              url="#"
              details="Proactive Maintenance การบำรุงรักษาเชิงรุก
                กุญแจสู่ความสำเร็จของการผลิต"
            />
          </div>
        </div>
      </Sections>
    </div>
  );
}
