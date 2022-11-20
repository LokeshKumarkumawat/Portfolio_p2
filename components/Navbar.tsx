import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ImCancelCircle } from "react-icons/im";
import { AiFillHome, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { HiMenuAlt4 } from "react-icons/hi";

//INTERNAL IMPORT
import Logo from "../assets/images/tiktik-logo.png";
import { topics } from "../utils/constants";

const NavBarItem = ({ title, classprops }: any) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState<Boolean>(false);
  return (
    <div className="blue-glassmorphismwithout-blur shadow-2xl">
      <div className="xl:w-[1200px]  mx-auto w-full flex justify-between items-center py-4 px-2 xs:px-6 ss:px-8 md:px-14 lg:px-32">
        <Link href="/">
          
   
            <Image
              className="cursor-pointer w-[130px] h-[42px]"
              src={Logo}
              alt="logo"
              height={5000}
              width={5000}
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
          <li className="bg-[#2952e3]  text-white list-none cursor-pointer hover:bg-[#2546bd] px-4 py-1 rounded ">
            RESUME
          </li>
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
  );
};

export default Navbar;
