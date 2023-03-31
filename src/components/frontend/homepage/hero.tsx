import Link from "next/link";
import Sections from "../../layoutpage";


export default function Hero() {
  return (
    <section
      className="h-screen bg-cover bg-fixed bg-no-repeat text-white mt-[80px]"
      style={{
        backgroundImage: "url('/home/hero-bg.jpeg')",
        backgroundColor: "#6F6F6F",
        backgroundBlendMode: "multiply",
      }}
    >
      <Sections>
        <div className="container flex flex-col h-screen justify-center text-start">
          <h2 className="lg:text-5xl md:text-5xl text-3xl font-bold">
            Business Hand in Hand
            <br />
            <span className="font-light">with new Technology</span>
          </h2>
          <p className="mt-3 lg:w-[530px] md:w-[530px]">
            Renergy accreditation standards. Members are proactive in both
            undertaking and applying animal welfare scientific research,
            contribute
          </p>
          <div className="mt-9">
            <Link
              href={`/#`}
              className="rounded-sm bg-blue-700 px-12 py-4 text-sm hover:bg-blue-900"
            >
              Discover
            </Link>
          </div>
        </div>
        <div className=" container"></div>
      </Sections>
    </section>
  );
}
