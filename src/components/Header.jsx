import React from "react";

const Header = () => {
  return (
    <header className="bg-white py-8 px-10 h-[13vh] rounded-br-xl">
      <div className="mx-auto flex justify-between items-center">
        <div className="flex items-center ml-[33vw] lg:ml-[5vw]">
          <p className="text-lg text-gray-600 w-auto mx-4 font-semibold ">Last Scan 07.11.2027</p>
          <p className="text-lg text-gray-600 w-auto mx-4 font-semibold ">05:34 PM</p>
          <p className="text-lg text-gray-600 w-auto mx-4 font-semibold ">Store ID -7943</p>
          <div className="h-[5rem] border-r mx-4  w-auto bottom-8  border-gray-400  ml-[2rem] lg:ml-[5rem]"></div>

        </div> 
        <div className=" flex flex-end flex-row w-auto mr-[3vw] lg:mr-[7vw]">
          <p className="text-lg text-blue-600 mx-4 w-auto font-semibold underline">Store Supervisor</p>
          <p className="text-lg text-gray-600 mx-4 w-auto font-semibold ">John Doe</p>
          <div className="w-12 h-12 bg-gray-300 mx-4  font-semibold rounded-full"></div>

        </div>

      </div>
    </header>
  );
};

export default Header;
