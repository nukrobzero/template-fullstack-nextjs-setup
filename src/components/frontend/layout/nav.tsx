import Link from "next/link";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";

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
    <div className=" bg-white fixed top-0 w-full z-50 left-0 border-b">
      <nav className="flex flex-wrap items-center justify-between max-w-[1920px] mx-auto p-4 h-[80px]">
        <div>
          <Link href={`/`}>
            <Image src={`/logo.png`} width={68} height={80} alt="logo" />
          </Link>
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
          <GiHamburgerMenu size={30} />
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
          <ul className="flex cursor-pointer flex-row items-center justify-between lg:gap-24 md:gap-8  gap-4">
            <li className="link link-underline link-underline-black">
              <Link href={`/about`}>About Us</Link>
            </li>
            <li
              onMouseEnter={() => setActiveMenu1(true)}
              onMouseLeave={() => setActiveMenu1(false)}
              className="link link-underline link-underline-black"
            >
              <Link href={`/#`}>Products</Link>
              <span className=" inline-block">
                {activeMenu1 === false ? (
                  <IoIosArrowDown color="#0083CA" />
                ) : (
                  <IoIosArrowUp color="#0083CA" />
                )}
              </span>
              {activeMenu1 && (
                <ul className="absolute rounded-md bg-[#1d252b] p-2 text-white shadow-lg">
                  <li className="link link-underline link-underline-black hover:text-[#8d9296]">
                    <Link href={`/#`}>Sub Products1</Link>
                  </li>
                  <li className="link link-underline link-underline-black hover:text-[#8d9296]">
                    <Link href={`/#`}>Sub Products2</Link>
                  </li>
                  <li className="link link-underline link-underline-black hover:text-[#8d9296]">
                    <Link href={`/#`}>Sub Products3</Link>
                  </li>
                </ul>
              )}
            </li>
            <li
              onMouseEnter={() => setActiveMenu2(true)}
              onMouseLeave={() => setActiveMenu2(false)}
              className="link link-underline link-underline-black"
            >
              <Link href={`/services`}>Services</Link>
              <span className=" inline-block">
                {activeMenu2 === false ? (
                  <IoIosArrowDown color="#0083CA" />
                ) : (
                  <IoIosArrowUp color="#0083CA" />
                )}
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
              <Link href={`/careers`}>Join US</Link>
            </li>
          </ul>
        </div>
        <div className="hidden w-full md:block md:w-auto">
          <Link
            href={`/contact-us`}
            className="border border-[#0083CA] px-10 py-3 text-[#0083CA] font-bold hover:text-white hover:bg-[#003F73]"
          >
            Contact Us
          </Link>
        </div>
      </nav>
    </div>
  );
}
