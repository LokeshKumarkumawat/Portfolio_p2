import Image from "next/image";
import React from "react";
import ziz from "../assets/images/ziz.png";
import backend from "../assets/images/backend.svg";
import frontend from "../assets/images/frontend.svg";
import design from "../assets/images/design.svg";

const Services = () => {
  return (
    <div className="relative bg-[#1B1D1E] flex items-center justify-center">
      <div className="flex gap-16 sm:gap-24 items-center flex-col pb-6  xl:w-[1280px]  mx-auto w-full pt-20 sm:pt-32  sm:pb-12 px-3 xs:px-6 ss:px-8 sm:px-14 lg:px-32">
        <div>
          <h1 className="text-white text-5xl font-bold">My Services</h1>
        </div>
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-4 items-center justify-center text-slate-400 ">
          <div className="flex  border-b-4 border-indigo-500 shadow-lg shadow-indigo-500/50 flex-col  bg-[#181A1B] justify-center gap-3 items-center py-14 sm:py-12 px-8 rounded flex-1  ">
            <Image
              className="cursor-pointer w-14 h-14"
              src={frontend}
              alt="logo"
              height={5000}
              width={5000}
            />
            <h3 className="font-bold text-2xl">Frontend</h3>
            <p className="text-xl text-center font-medium">
              Convert a user-friendly UI wireframes into structured code.
            </p>
          </div>
          <div className="flex  border-b-4 border-indigo-500 shadow-lg shadow-indigo-500/50 flex-col  bg-[#181A1B] justify-center gap-3 items-center py-14 sm:py-12 px-8 rounded flex-1  ">
            <Image
              className="cursor-pointer w-14 h-14"
              src={backend}
              alt="logo"
              height={5000}
              width={5000}
            />
            <h3 className="font-bold text-2xl">Backend</h3>
            <p className="text-xl text-center font-medium">
              Develop a backend application to deliver the solution.
            </p>
          </div>
          <div className="flex  border-b-4 border-indigo-500 shadow-lg shadow-indigo-500/50 flex-col  bg-[#181A1B] justify-center gap-3 items-center py-14 sm:py-12 px-8 rounded flex-1  ">
            <Image
              className="cursor-pointer w-14 h-14"
              src={design}
              alt="logo"
              height={5000}
              width={5000}
            />
            <h3 className="font-bold text-2xl">Design</h3>
            <p className="text-xl text-center font-medium">
              Design an interactive and user-friendly UI of the solution.
            </p>
          </div>
        </div>
      </div>

      <Image
        className="w-96 h-96 absolute top-4 left-0 "
        src={ziz}
        alt="logo"
        height={5000}
        width={5000}
      />

      <Image
        className="w-96 h-96 absolute bottom-0 right-0 rotate-180 "
        src={ziz}
        alt="logo"
        height={5000}
        width={5000}
      />
    </div>
  );
};

export default Services;
