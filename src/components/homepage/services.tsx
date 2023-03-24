import ItemsServices from "./items-image-services";

export default function ServiceHero() {
  return (
    <div className=" h-screen">
      <div className="mx-auto flex h-screen max-w-7xl flex-col items-center justify-center justify-items-center">
        <div className="flex flex-col items-center text-center">
          <h3 className=" uppercase text-blue-700">services</h3>
          <h5 className=" my-4 text-4xl font-bold">
            <span className=" text-blue-400">. </span>We provide{" "}
            <span className=" text-blue-400">Creatve Services</span>
          </h5>
          <p className=" max-w-xl">
            Renergy accreditation standards. Members are proactive in both
            undertaking and applying animal welfare scientific research,
            contributing to EAZA being
          </p>
        </div>
        <div className="mt-16 grid grid-cols-4 items-center justify-center justify-items-center gap-36">
          <ItemsServices
            src="/home/services/img1.svg"
            width={70}
            height={70}
            alt="img1"
            title="Sun Energy"
          />
          <ItemsServices
            src="/home/services/img2.svg"
            width={70}
            height={70}
            alt="img2"
            title="Water Energy"
          />
          <ItemsServices
            src="/home/services/img3.svg"
            width={70}
            height={70}
            alt="img3"
            title="Wind Energy"
          />
          <ItemsServices
            src="/home/services/img4.svg"
            width={70}
            height={70}
            alt="img4"
            title="Bio Energy"
          />
        </div>
      </div>
    </div>
  );
}
