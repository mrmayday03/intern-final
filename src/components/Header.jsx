import React from "react";

const Header = () => {
  return (
    <header className="bg-white lg:px-2  lg:h-[8vh] xl:h-[13vh] rounded-br-xl ">
      <div className="mx-auto flex flex-row justify-between  l ">
        <div className="flex  xl:ml-[14vw] lg:ml-[8vw]  my-auto  ">
          <p className="text-lg text-gray-600  lg:w-[11rem] lg:mx-1  lg:text-sm xl:text-3xl font-semibold ">Last Scan: 07.11.2027</p>
          <p className="text-lg text-gray-600 w-auto lg:mx-1 lg:w-auto  lg:text-sm xl:text-3xl font-semibold ">05:34 PM</p>
          <p className="text-lg text-gray-600 w-auto lg:mx-1 lg:w-auto   lg:text-sm xl:text-2xl font-semibold ">Store ID -7943</p>
          <div className="h-[5rem] border-r mx-4  w-auto lg:w-auto bottom-8 xl:text-2xl border-gray-400  ml-[2rem] lg:ml-[5r]  lg:h-12 xl:h-20"> </div>
          
        </div> 
        <div className=" flex flex-end flex-row w-auto mr-[3vw] lg:mr-[20vw] ">
          <p className="text-lg text-blue-600 mx-4 w-auto lg:text-sm xl:text-3xl font-semibold underline">Store Supervisor</p>
          <p className="text-lg text-gray-600 mx-4  lg:text-sm xl:text-3xl font-semibold ">John Doe</p>
          <div className="xl:w-12 xl:h-12 lg:w-6 lg:h-6 lg:mt-3 bg-gray-300 mx-4 lg:text-sm xl:text-2xl font-semibold rounded-full"></div>

        </div>

      </div>
    </header>
  );
};

export default Header;
