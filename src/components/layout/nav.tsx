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
        <Link href={`/home`}>logo</Link>
        <Link href={`/dashboard`} className="ml-5">
          dashboard
        </Link>
      </div>
      <div>
        <ul className="flex cursor-pointer flex-row items-center justify-between gap-4">
          <li
            onMouseEnter={() => setActiveMenu1(true)}
            onMouseLeave={() => setActiveMenu1(false)}
            className="link link-underline link-underline-black"
          >
            menu1
            <span className=" inline-block">
              {activeMenu1 === false ? <IoIosArrowDown /> : <IoIosArrowUp />}
            </span>
            {activeMenu1 && (
              <ul className="absolute rounded-md bg-[#1d252b] p-2 text-white shadow-lg">
                <li className="link link-underline link-underline-black hover:text-[#8d9296]">
                  submenu1
                </li>
                <li className="link link-underline link-underline-black hover:text-[#8d9296]">
                  submenu2
                </li>
                <li className="link link-underline link-underline-black hover:text-[#8d9296]">
                  submenu3
                </li>
              </ul>
            )}
          </li>
          <li
            onMouseEnter={() => setActiveMenu2(true)}
            onMouseLeave={() => setActiveMenu2(false)}
            className="link link-underline link-underline-black"
          >
            menu2
            <span className=" inline-block">
              {activeMenu2 === false ? <IoIosArrowDown /> : <IoIosArrowUp />}
            </span>
            {activeMenu2 && (
              <ul className="absolute rounded-md bg-[#1d252b] p-2 text-white shadow-lg">
                <li className="link link-underline link-underline-black hover:text-[#8d9296]">
                  submenu1
                </li>
                <li className="link link-underline link-underline-black hover:text-[#8d9296]">
                  submenu2
                </li>
                <li className="link link-underline link-underline-black hover:text-[#8d9296]">
                  submenu3
                </li>
              </ul>
            )}
          </li>
          <li
            onMouseEnter={() => setActiveMenu3(true)}
            onMouseLeave={() => setActiveMenu3(false)}
            className="link link-underline link-underline-black"
          >
            menu3
            <span className=" inline-block">
              {activeMenu3 === false ? <IoIosArrowDown /> : <IoIosArrowUp />}
            </span>
            {activeMenu3 && (
              <ul className="absolute rounded-md bg-[#1d252b] p-2 text-white shadow-lg">
                <li className="link link-underline link-underline-black hover:text-[#8d9296]">
                  submenu1
                </li>
                <li className="link link-underline link-underline-black hover:text-[#8d9296]">
                  submenu2
                </li>
                <li className="link link-underline link-underline-black hover:text-[#8d9296]">
                  submenu3
                </li>
              </ul>
            )}
          </li>
          <li
            onMouseEnter={() => setActiveMenu4(true)}
            onMouseLeave={() => setActiveMenu4(false)}
            className="link link-underline link-underline-black"
          >
            menu4
            <span className=" inline-block">
              {activeMenu4 === false ? <IoIosArrowDown /> : <IoIosArrowUp />}
            </span>
            {activeMenu4 && (
              <ul className="absolute rounded-md bg-[#1d252b] p-2 text-white shadow-lg">
                <li className="link link-underline link-underline-black hover:text-[#8d9296]">
                  submenu1
                </li>
                <li className="link link-underline link-underline-black hover:text-[#8d9296]">
                  submenu2
                </li>
                <li className="link link-underline link-underline-black hover:text-[#8d9296]">
                  submenu3
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
