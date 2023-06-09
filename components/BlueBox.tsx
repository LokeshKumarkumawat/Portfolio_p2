import React from "react";
import Image from "next/image";
import wifi from "../assets/images/wifi.svg";
import dots from "../assets/images/dots.svg";

const BlueBox = () => {
  return (
    <div className="relative  bg-[#29347A] ">
      <div className=" flex flex-wrap gap-10 sm:gap-5 justify-between items-center text-white xl:w-[1200px]  mx-auto w-full ss:py-16 sm:py-20 py-8  px-3 xs:px-6 ss:px-8 md:px-14 lg:px-32">
        <div className="flex flex-1 flex-col items-center  border-r-grey50 sm:border-r  ">
          <div className="text-4xl md:text-5xl justify-center text-center">
            <p>20+</p>
            <p className="text-xl">Projects</p>

          </div>
        </div>
        <div className="flex flex-1 flex-col items-center  border-r-grey50 sm:border-r  ">
        <div className="text-4xl md:text-5xl justify-center text-center">
          <p>7+</p>
            <p className="text-xl">Languages</p>
          </div>
        </div>
        <div className="flex flex-1 flex-col items-center border-r-grey50 sm:border-r  ">
        <div className="text-4xl md:text-5xl justify-center text-center">
          <p>3+</p>
            <p className="text-xl">Framework</p>
          </div>
        </div>
        <div className="flex flex-1 flex-col items-center ">
        <div className="text-4xl md:text-5xl justify-center text-center">
          <p>3+</p>
            <p className="text-xl">LeetCode</p>
          </div>
        </div>
      </div>

      <Image
        className="cursor-pointer w-40 h-12 absolute top-0 left-0 rotate-180"
        src={dots}
        alt="logo"
        height={5000}
        width={5000}
      />
      <Image
        className="cursor-pointer w-28 h-28 absolute bottom-0 left-0 "
        src={wifi}
        alt="logo"
        height={5000}
        width={5000}
      />
      <Image
        className="cursor-pointer w-40 h-12 absolute bottom-0 right-0 "
        src={dots}
        alt="logo"
        height={5000}
        width={5000}
      />
      <Image
        className="cursor-pointer w-28 h-28 absolute top-0 right-0 rotate-180 "
        src={wifi}
        alt="logo"
        height={5000}
        width={5000}
      />
    </div>
  );
};

export default BlueBox;

// import React from "react";

// const BlueBox = () => {
//   return (
//     <div className="relative  bg-[#29347A] h-56">
//       <div className='className="flex flex-col md:flex-row gap-5 justify-between items-center text-white xl:w-[1200px]  mx-auto w-full py-24 px-2 xs:px-6 ss:px-8 md:px-14 lg:px-32'>
//         <h1>lok</h1>
//       </div>
//     </div>
//   );
// };

// export default BlueBox;
