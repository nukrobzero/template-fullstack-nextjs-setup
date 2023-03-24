import Link from "next/link";

export default function Hero() {
  return (
    <div
      className="h-screen bg-cover bg-fixed bg-no-repeat text-white"
      style={{
        backgroundImage:
          "url('/home/hero-bg.jpeg'), radial-gradient(circle at 0% 100%, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)",
        backgroundBlendMode: "multiply",
      }}
    >
      <div className="mx-auto flex h-screen max-w-7xl items-center justify-items-center">
        <div className="container">
          <h2 className="text-5xl font-bold">
            Business Hand in Hand
            <br />
            <span className="font-light">with new Technology</span>
          </h2>
          <p className="mt-3 w-[530px]">
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
      </div>
    </div>
  );
}
