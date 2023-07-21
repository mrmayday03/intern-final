import React from 'react';
import cal from '../../assets/icons/cal.svg';
import clock from '../../assets/icons/clock.svg';
import refresh from '../../assets/icons/refresh.svg';

const Scan = () => {
  return (
    <div className="scan bg-white rounded-2xl p-4 xl:h-[30vh] xl:top-[42vh] xl:w-[40vh] xl:right-[15vw] mr-10vh lg:h-[40vh] lg:top-[35vh]  ">
      <p className="scan-title  text-gray-500 font-bold xl:text-2xl lg:text-xl ">Scan report</p>
      <p className="last-scan text-gray-500 -mt-4 xl:text-xl lg:text-lg lg:-mt-8">Last Scan:</p>
      <div className="time-stamp ">
        <div className="date flex items-center xl:-mt-5 lg:-mt-8">
          <img src={cal} alt="" className="xl:h-5 xl:ml-5 lg:h-3 " />
          <p className="ques text-gray-500 xl:text-lg lg:text-sm ">Date :</p>
          <p className="ans text-gray-500 font-bold xl:-ml-4 xl:text-lg  lg:text-sm " >07-09-2023</p>
        </div>
        <div className="time flex items-center -mt-5">
          <img src={clock} alt="" className="xl:h-5 xl:ml-5  lg:h-3" />
          <p className="ques text-gray-500 xl:text-lg  lg:text-sm ">Time :</p>
          <p className="ans text-gray-500 font-bold xl:-ml-4 xl:text-lg  lg:text-sm ">05:34 PM</p>
        </div>
        <div className="status flex items-center xl:-mt-6 xl:ml-2 lg:-mt-8 ">
          <p className="ques text-gray-500 xl:text-lg  lg:text-sm ">Scanner Status:</p>
          <p className="ans text-green-700 font-bold xl:text-lg m-2 ml-1 lg:-ml-6">Inactive</p>
        </div>
        <div className="ref-btn flex items-center bg-blue-200 xl:w-[7rem]  xl:mx-auto xl:mt-3 xl:rounded-[0.4rem] lg:ml-5 border-blue-600 lg:-mt-4 ">
          <button className=" px-2 py-1 rounded-md text-blue-700 xl:text-xl   text-sm font-semibold  ">Refresh</button>
          <img src={refresh} alt="" className="h-4 ml-1 " />
        </div>
      </div>
    </div>
  );
};

export default Scan;
