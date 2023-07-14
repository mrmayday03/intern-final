import React from "react";

const Header = () => {
  return (
    <header className="bg-white py-8 px-10 h-[15vh] rounded-br-xl h-[2rem]">
      <div className="mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <p className="text-sm px-10">Last Scan 07.11.2027</p>
          <p className="text-sm px-10">05:34 PM</p>
          <p className="text-sm px-10">Store ID -7943</p>
        </div>
        <p className="text-sm underline">Store Supervisor</p>
        <p className="text-sm ">John Doe</p>
        <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
      </div>
    </header>
  );
};

export default Header;
