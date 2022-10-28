import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-blue-500 p-4">

      <div className="flex justify-between items-center md:order-2">
        <div className="inline-block cursor-pointer p-4">
          <div className="bg-black line h-1 w-6 my-1"></div>
          <div className="bg-black line h-1 w-6 my-1"></div>
          <div className="bg-black line h-1 w-6 my-1"></div>
        </div>
        <div className="md:hidden">Search</div>
      </div>

      <div className="text-center md:order-1 flex">Microsoft
        <div className="md:flex mx-4 space-x-2 positio">
          <div>Microsoft</div>
          <div>365</div>
          <div>Office</div>
          <div>Windows</div>
          <div>Xbox</div>
        </div>
      </div>
      <div className="text-center md:order-3 flex justify-between">
        <div className="hidden md:block">Search</div>
        <div className="">Account</div>
      </div>
    </div>
  );
};

export default Navbar;
