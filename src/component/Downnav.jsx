import React from "react";
import Logo from "../iimages/Logo.svg";
const Downnav = () => {
  // const obj = [
  //   {
  //     title: "home",
  //   },
  //   {
  //     title: "about",
  //   },
  //   {
  //     title: "courses",
  //   },
  //   {
  //     title: "placements",
  //   },
  //   {
  //     title: "library",
  //   },
  //   {
  //     title: "notice",
  //   },
  //   {
  //     title: " more",
  //   },
  // ];

  return (
    <div className="flex flex-row  h-20 w-full shadow-lg shadow-gray-400 items-center">
      <div
        className="flex flex-row  justify-evenly items-center w-1/2
    "
      >
        <div>
          <img src={Logo} alt="logo" />
        </div>

        <div>
          <div class="capitalize cursor-pointer px-2 py-1 text-xs xl:text-sm xxl:text-base bg-gray-700 transition-all hover:scale-105 ease-in-out duration-300 delay-75 bg-main animatePulse  rounded-md text-white  hover:bg-[#8a0c79]">
            online admission
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-2 justify-center w-1/2 items-center">
        <div>
          {" "}
          <div className="border-r-2 cursor-pointer px-2 border-black text-sm mr-2">
            {" "}
            Home
          </div>
        </div>
        <div>
          <div className="border-r-2 cursor-pointer px-2 border-black text-sm mr-2">
            About Us
          </div>
        </div>
        <div>
          {" "}
          <div className="border-r-2 cursor-pointer px-2 border-black text-sm mr-2">
            Courses
          </div>
        </div>
        <div>
          {" "}
          <div className="border-r-2 cursor-pointer px-2 border-black text-sm mr-2">
            Placements
          </div>
        </div>
        <div>
          {" "}
          <div className="border-r-2 cursor-pointer px-2 border-black text-sm mr-2">
            Library
          </div>
        </div>
        <div>
          {" "}
          <div className="border-r-2 cursor-pointer px-2 border-black text-sm mr-2">
            Notice
          </div>
        </div>

        <div className="bcursor-pointer px-2 ">More</div>
      </div>
    </div>
  );
};

export default Downnav;
