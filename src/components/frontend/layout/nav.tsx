import Link from "next/link";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [activeMenu1, setActiveMenu1] = useState(false);
  const [activeMenu2, setActiveMenu2] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleCloseMenu = () => {
    setMenuOpen(!menuOpen);
    setActiveMenu1(false);
    setActiveMenu2(false);
  };

  return (
    <div className=" bg-white fixed top-0 w-full z-20 left-0 border-b">
      <nav className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 h-[80px]">
        <div>
          <Link href={`/`}>logo</Link>
        </div>

        {/* Mobile Menu */}
        <button
          onClick={toggleMenu}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        {menuOpen && (
          <>
            <div
              className="fixed top-0 right-0 w-full h-full bg-black opacity-50 z-20"
              onClick={toggleCloseMenu}
            ></div>
            <div className="fixed top-0 left-0 w-2/3 h-full bg-white z-30 border-r ease-in-out">
              <div className="flex flex-wrap justify-end max-w-screen-xl mx-auto px-4 py-3">
                <button onClick={toggleCloseMenu}>
                  <AiOutlineClose size={20} />
                </button>
              </div>
              <div className="flex flex-wrap justify-center items-center mb-4">
                <Link href={`/`}>logo</Link>
              </div>
              <ul className="ml-4">
                <li>
                  <Link href={`/`}>Home</Link>
                </li>
                <li>
                  <div className="flex flex-row items-center">
                    <Link href={`/about`}>About</Link>
                    <span
                      onClick={() => setActiveMenu1(!activeMenu1)}
                      className=" cursor-pointer"
                    >
                      <IoIosArrowDown />
                    </span>
                  </div>
                  {activeMenu1 && (
                    <ul className="ml-2">
                      <li>
                        <Link href={`/about/out-value`}>Out Value</Link>
                      </li>
                      <li>
                        <Link href={`/about/partner`}>Partner</Link>
                      </li>
                      <li>
                        <Link href={`/about/contribution`}>Contribution</Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <Link href={`/#`}>Products</Link>
                </li>
                <li>
                  <div className="flex flex-row items-center">
                    <Link href={`/services`}>Services</Link>
                    <span
                      onClick={() => setActiveMenu2(!activeMenu2)}
                      className=" cursor-pointer"
                    >
                      <IoIosArrowDown />
                    </span>
                  </div>
                  {activeMenu2 && (
                    <ul className="ml-2">
                      <li>
                        <Link href={`/services/machinning`}>Machinning</Link>
                      </li>
                      <li>
                        <Link href={`/service/measuring`}>Measuring</Link>
                      </li>
                      <li>
                        <Link href={`/services/automation`}>Automation</Link>
                      </li>
                      <li>
                        <Link href={`/services/iot`}>IoT</Link>
                      </li>
                      <li>
                        <Link href={`/services/genaral`}>Genaral</Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <Link href={`/blog`}>Blog</Link>
                </li>
                <li>
                  <Link href={`/careers`}>Careers</Link>
                </li>
                <li>
                  <Link href={`/contact-us`}>Contact Us</Link>
                </li>
              </ul>
            </div>
          </>
        )}

        {/* Desktop Menu */}
        <div className="hidden w-full md:block md:w-auto">
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
            <li className="link link-underline link-underline-black">
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
            <li className="link link-underline link-underline-black">
              <Link href={`/blog`}>Blog</Link>
            </li>
            <li className="link link-underline link-underline-black">
              <Link href={`/careers`}>Careers</Link>
            </li>
            <li className="link link-underline link-underline-black">
              <Link href={`/contact-us`}>Contact Us</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
