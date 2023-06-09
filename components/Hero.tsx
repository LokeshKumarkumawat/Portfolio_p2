import Link from "next/link";
import React from "react";
import hero from "../assets/images/hero.svg";
import hero1 from "../assets/images/hero1.svg";
import hero2 from "../assets/images/hero2.png";
import linkedin from "../assets/images/linkedin.svg";
import github from "../assets/images/github.svg";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-0 justify-between items-center text-white xl:w-[1280px]  mx-auto w-full pt-24 sm:pb-12 px-3 xs:px-6 ss:px-8 sm:px-14 lg:px-32 ">
      {/* // LEFT */}
      <div className="flex flex-col flex-1 gap-5 justify-center items-center sm:items-start text-center sm:text-start  ">
        <p className="flex text-5xl sm:text-6xl font-bold font-sans text-gradient justify-center items-center">
          Hey, I'm Lokesh
        </p>

        <p className="text-4xl font-sans font-bold ">
          I speak&nbsp; Javascript
        </p>

        <p className="flex text-xl  font-thin items-center justify-center  font-sans leading-7">
          I'm a self-taught MERN Stack Developer who specializes in building
          exceptional web applications. Currently, I'm focussing on building
          user-friendly products and Crypto Blockchain technology.
        </p>
        {/* BUTTONS */}
        <div className="flex mt-6 gap-3 sm:gap-5 flex-col sm:flex-row w-full">
          <Link href="#">
            <button className="flex gap-2 uppercase justify-center items-center w-full  bg-transparent hover:bg-[#27535D] text-[#27535D] font-semibold hover:text-black py-3 px-9 border border-[#27535D] hover:border-transparent rounded">
              <h1> LinkedIn</h1>
              <Image
                className="cursor-pointer w-6 h-6  "
                src={linkedin}
                alt="logo"
                height={5000}
                width={5000}
              />
            </button>
          </Link>
          <Link href="#">
            <button className="flex gap-2 uppercase justify-center items-center w-full  bg-[#FFFFFF] opacity-25 hover:bg-[#27535D] text-[#27535D] font-semibold hover:text-black py-3 px-9 border border-[#27535D] hover:border-transparent rounded">
              <h1 className="text-black"> GITHUB</h1>
              <Image
                className="cursor-pointer w-6 h-6  "
                src={github}
                alt="logo"
                height={5000}
                width={5000}
              />
            </button>
          </Link>
        </div>
      </div>

      {/* // RIGHT */}

      <div className="flex flex-1">
        <Image
          className="flex flex-1  object-fill   "
          src={hero1}
          alt="logo"
          height={5000}
          width={5000}
        />
      </div>
    </div>
  );
};

export default Hero;
