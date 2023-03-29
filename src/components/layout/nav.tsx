import Link from "next/link";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

export default function Navbar() {
  const [activeMenu1, setActiveMenu1] = useState(false);
  const [activeMenu2, setActiveMenu2] = useState(false);
  const [activeMenu3, setActiveMenu3] = useState(false);
  const [activeMenu4, setActiveMenu4] = useState(false);
  return (
    <nav className="justify-items-centers mx-auto flex h-[80px] max-w-7xl items-center justify-between">
      <div>
        <Link href={`/`}>logo</Link>
      </div>
      <div>
        <ul className="flex cursor-pointer flex-row items-center justify-between gap-4">
          <li
            onMouseEnter={() => setActiveMenu1(true)}
            onMouseLeave={() => setActiveMenu1(false)}
            className="link link-underline link-underline-black"
          >
            <Link href={`/about`}>About</Link>
            <span className=" inline-block">
              {activeMenu1 === false ? <IoIosArrowDown /> : <IoIosArrowUp />}
            </span>
            {activeMenu1 && (
              <ul className="absolute rounded-md bg-[#1d252b] p-2 text-white shadow-lg">
                <li className="link link-underline link-underline-black hover:text-[#8d9296]">
                  <Link href={`/about/out-value`}>Out Value</Link>
                </li>
                <li className="link link-underline link-underline-black hover:text-[#8d9296]">
                  <Link href={`/about/partner`}>Partner</Link>
                </li>
                <li className="link link-underline link-underline-black hover:text-[#8d9296]">
                  <Link href={`/about/contribution`}>Contribution</Link>
                </li>
              </ul>
            )}
          </li>
          <li
            className="link link-underline link-underline-black"
          >
            <Link href={`/#`}>Products</Link>
          </li>
          <li
            onMouseEnter={() => setActiveMenu2(true)}
            onMouseLeave={() => setActiveMenu2(false)}
            className="link link-underline link-underline-black"
          >
            <Link href={`/services`}>Services</Link>
            <span className=" inline-block">
              {activeMenu2 === false ? <IoIosArrowDown /> : <IoIosArrowUp />}
            </span>
            {activeMenu2 && (
              <ul className="absolute rounded-md bg-[#1d252b] p-2 text-white shadow-lg">
                <li className="link link-underline link-underline-black hover:text-[#8d9296]">
                <Link href={`/services/machinning`}>Machinning</Link>
                </li>
                <li className="link link-underline link-underline-black hover:text-[#8d9296]">
                <Link href={`/service/measuring`}>Measuring</Link>
                </li>
                <li className="link link-underline link-underline-black hover:text-[#8d9296]">
                <Link href={`/services/automation`}>Automation</Link>
                </li>
                <li className="link link-underline link-underline-black hover:text-[#8d9296]">
                <Link href={`/services/iot`}>IoT</Link>
                </li>
                <li className="link link-underline link-underline-black hover:text-[#8d9296]">
                <Link href={`/services/genaral`}>Genaral</Link>
                </li>
              </ul>
            )}
          </li>
          <li
            className="link link-underline link-underline-black"
          >
            <Link href={`/blog`}>Blog</Link>
          </li>
          <li
            className="link link-underline link-underline-black"
          >
            <Link href={`/careers`}>Careers</Link>
          </li>
          <li
            className="link link-underline link-underline-black"
          >
            <Link href={`/contact-us`}>Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
