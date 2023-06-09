import Image from "next/image";
import React from "react";
import edots from "../assets/images/edots.svg";
import ziz from "../assets/images/ziz.png";
import p1 from "../assets/images/p1.png";
import SliderProject from './SliderProject'


const Projects = () => {
  return (
    <div className="relative bg-[#1B1D1E] flex items-center justify-center">
      <div className="flex gap-16 sm:gap-24 items-center flex-col pb-6   xl:w-[1280px]  mx-auto w-full pt-24 sm:pb-12 px-3 xs:px-6 ss:px-8 sm:px-14 lg:px-32">
        <div>
          <h1 className="text-white text-5xl uppercase font-bold">My Projects</h1>
        </div>

        <SliderProject /> 

      </div>

      <Image
        className="cursor-pointer w-96 h-96 absolute bottom-4 right-0 rotate-180 "
        src={ziz}
        alt="logo"
        height={5000}
        width={5000}
      />

      <Image
        className=" w-56 h-28 sm:h-48 absolute top-14 left-0  rotate-180"
        src={edots}
        alt="logo"
        height={5000}
        width={5000}
      />
    </div>
  );
};

export default Projects;
