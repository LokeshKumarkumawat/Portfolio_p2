import Link from "next/link";
import React from "react";
import hero from "../assets/images/hero.svg";
import hero2 from "../assets/images/hero2.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row gap-24 justify-between items-center text-white xl:w-[1200px]  mx-auto w-full py-4 px-2 xs:px-6 ss:px-8 md:px-14 lg:px-32 ">
      {/* // LEFT */}
      <div className="flex flex-col flex-1 gap-5 justify-between items-start  ">
        <h1 className="text-6xl font-bold">Hey, I'm Lokesh</h1>

        <p className="text-4xl font-light">TI speak&nbsp; Javascript</p>
        <h3 style={{ color: "#3B82F6" }}>
          {" "}
          {/* <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 40,
                strings: [" Javascript", " Node.js", " MongoDB", " React.js"],
              }}
            />{" "} */}
        </h3>
        <p className=" text-xl font-thin leading-7">
          I'm a self-taught MERN Stack Developer who specializes in building
          exceptional web applications. Currently, I'm focussing on building
          user-friendly products and Crypto Blockchain technology.
        </p>
        {/* BUTTONS */}
        <div className="flex flex-col md:flex-row">
          <Link href="#">
            <span className=" flex bg-[#303030] h-12 w-56 text-white font-bold justify-center items-center rounded uppercase cursor-pointer mr-1  hover:bg-[#161616]"> linkedIn</span>
          </Link>
          <Link href="#">
            <span className=" flex bg-[#303030] h-12 w-56 text-white font-bold justify-center items-center rounded uppercase cursor-pointer mr-2  hover:bg-[#161616]"> linkedIn</span>
          </Link>
        </div>
      </div>

      {/* // RIGHT */}
      <div className="flex flex-1">
      <Image
              className="cursor-pointer md:h-96"
              src={hero2}
              alt="logo"
              height={5000}
              width={5000}
            
            />
      </div>
    </div>
  );
};

export default Hero;
