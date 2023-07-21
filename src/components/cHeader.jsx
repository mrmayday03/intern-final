import React from "react";

const cHeader = () => {
  return (
    <header className="bg-white lg:px-0 xl:my-auto lg:h-[8vh] xl:h-[13vh]  rounded-br-xl ">
      <div className="mx-auto flex flex-row justify-between  xl:mt-10 ">
        <div className="flex xl:ml-[14vw] lg:ml-[8vw]  my-auto  ">
          <p className="text-gray-600  lg:w-[11rem] xl:w-[15rem] lg:mx-1 text-center  lg:text-sm xl:text-xl font-semibold ">Last Scan: 07.11.2027</p>
          <p className="text-gray-600 w-auto lg:mx-1 lg:w-auto xl:w-[15rem] lg:text-sm text-center xl:text-xl font-semibold ">05:34 PM</p>
          <p className="text-gray-600 w-auto lg:mx-1 lg:w-auto  xl:w-[15rem] lg:text-sm text-center xl:text-xl font-semibold ">Store ID -7943</p>
          <div className="h-[5rem] border-r mx-4  w-auto lg:w-auto bottom-8 xl:text-2xl border-gray-400  ml-[2rem] lg:ml-[5r]  lg:h-12 xl:h-20"> </div>
          
        </div> 
        <div className=" flex flex-end flex-row w-auto lg:mr-[20vw] xl:mr-[25rem] ">
          <p className="text-lg text-blue-600 mx-4 lg:w-auto xl:w-[15rem] lg:text-sm xl:text-xl font-semibold underline text-center">Store Supervisor</p>
          <p className="text-lg text-gray-600 lg:text-sm xl:text-xl xl:w-[12rem] font-semibold ">John Doe</p>
          <div className="xl:w-12 xl:h-12 lg:w-6 lg:h-6 lg:mt-3 bg-gray-300  lg:text-sm xl:text-xl xl:mr-10 font-semibold rounded-full"></div>

        </div>

      </div>
    </header>
  );
};

export default cHeader;
