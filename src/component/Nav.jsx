import React from "react";

const Nav = () => {
  return (
    <div className="flex flex-row bg-[#8a0c79] h-7 w-full justify-around">
      <div className="flex gap-2 text-white items-center text-xs px-4 ">
        <div className="">
          <div className="border-r-2 px-3">071-532805</div>
        </div>
        <div>9827494116</div>
        <div>training@hubit.com.np</div>
      </div>
      <div className="flex gap-4 text-white items-center text-xs px-4">
        <div className="hover:scale-110 cursor-pointer">Check Certificate</div>
        <div className="hover:scale-110 cursor-pointer">Contact Us</div>

        <div className="hover:scale-110 cursor-pointer">Download Brochure</div>
        <div className="hover:scale-110 cursor-pointer">Hackathons</div>
        <div className="hover:scale-110 cursor-pointer">Hire Talents</div>
        <div className="hover:scale-110 cursor-pointer">Testimonials</div>
      </div>
    </div>
  );
};

export default Nav;
