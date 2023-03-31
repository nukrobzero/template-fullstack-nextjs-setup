import Sections from "../../layoutpage";
import ItemsServices from "./items-image-services";

export default function ServiceHero() {
  return (
    <div className="">
      <Sections>
        <div className="flex flex-col justify-center items-center container">
          <div className="text-center">
            <h3 className=" uppercase text-blue-700">services</h3>
            <h5 className=" my-4 text-4xl font-bold">
              <span className=" text-blue-400">. </span>We provide
              <span className=" text-blue-400"> Creatve Services</span>
            </h5>
            <p className=" max-w-xl">
              Renergy accreditation standards. Members are proactive in both
              undertaking and applying animal welfare scientific research,
              contributing to EAZA being
            </p>
          </div>
          <div className="mt-16 grid lg:grid-cols-4  md:grid-cols-2 grid-cols-1 items-center justify-center justify-items-center lg:gap-36 gap-6">
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
      </Sections>
    </div>
  );
}
