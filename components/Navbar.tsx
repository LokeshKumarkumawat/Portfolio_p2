import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ImCancelCircle } from "react-icons/im";
import { AiFillHome, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { HiMenuAlt4 } from "react-icons/hi";

//INTERNAL IMPORT
import Logo from "../assets/images/tiktik-logo.png";
import Logo1 from "../assets/images/logo.png";
import { topics } from "../utils/constants";

const NavBarItem = ({ title, classprops }: any) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState<Boolean>(false);
  return (
    <div className="fixed top-0 left-0 right-0 z-40">
      <div className=" shadow-xl shadow-cyan-500/10  bg-transparent backdrop-blur-md">
        <div className="  mx-auto  flex  justify-between items-center py-4 px-2 xs:px-6 ss:px-8 md:px-14 lg:px-32">
          <Link href="/">
            <Image
              className="cursor-pointer w-[60px] h-[60px]"
              src={Logo1}
              alt="logo"
            />
          </Link>

          {/* //MIDDLE SECTION */}
          <div className="flex gap-3 flex-1 justify-center items-center">
            {topics?.map((item) => (
              <Link href={`/?topic=${item.name}`} key={item.name}>
                <div
                  className={` text-md hidden md:block capitalize text-[#FFFFFF] hover:text-[#3B82F6]`}
                >
                  {item.name}
                </div>
              </Link>
            ))}
          </div>

          {/* // RESUME BUTTON */}
          <div className="hidden md:block">
            <Link href="#">
              <button className="flex gap-2 uppercase justify-center items-center w-44 bg-transparent hover:bg-[#27535D] text-[#bedfe6] font-semibold hover:text-black py-2 px-0 border border-[#27535D] hover:border-transparent rounded">
                <h1> RESUME</h1>
                <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
              </button>
            </Link>
          </div>

          {/* SIDEBAR ICON */}
          <div
            className="block md:hidden  text-xl"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            {showSidebar ? (
              <AiOutlineClose
                fontSize={28}
                className="text-white md:hidden cursor-pointer"
              />
            ) : (
              <HiMenuAlt4
                fontSize={28}
                className="text-white md:hidden cursor-pointer"
              />
            )}
          </div>
          <div className="flex ">
            {showSidebar && (
              <ul
                className="z-50 fixed -top-0 -left-2 p-3 w-[50vw] h-screen shadow-2xl md:hidden list-none
          flex flex-col justify-start items-center rounded-md blue-glassmorphism text-white animate-slide-in"
              >
                {topics.map((item) => (
                  <NavBarItem
                    key={item.name}
                    title={item.name}
                    classprops="my-2 text-lg"
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
