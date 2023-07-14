import React from 'react';
import cal from '../../assets/icons/cal.svg';
import clock from '../../assets/icons/clock.svg';
import refresh from '../../assets/icons/refresh.svg';

const Scan = () => {
  return (
    <div className="scan bg-white rounded-xl p-4 fixed h-[35vh] top-[50vh] w-[40vh] right-[8vw] mr-10vh">
      <p className="scan-title  text-gray-500 font-bold text-2xl ">Scan report</p>
      <p className="last-scan text-gray-500 -mt-4 text-xl">Last Scan:</p>
      <div className="time-stamp ">
        <div className="date flex items-center -mt-5">
          <img src={cal} alt="" className="h-5 ml-5 " />
          <p className="ques text-gray-500 text-lg">Date :</p>
          <p className="ans text-gray-500 font-bold -ml-4 text-lg">07-09-2023</p>
        </div>
        <div className="time flex items-center -mt-5">
          <img src={clock} alt="" className="h-5 ml-5" />
          <p className="ques text-gray-500 text-lg ">Time :</p>
          <p className="ans text-gray-500 font-bold -ml-4 text-lg ">05:34 PM</p>
        </div>
        <div className="status flex items-center -mt-6 ml-2">
          <p className="ques text-gray-500 text-lg ">Scanner Status:</p>
          <p className="ans text-green-700 font-bold text-lg m-2 ml-1">Inactive</p>
        </div>
        <div className="ref-btn flex items-center bg-blue-200 w-[7rem]  mx-0 rounded-[0.4rem]   ">
          <button className=" px-2 py-1 rounded-md text-blue-700 border-none text-sm font-semibold">Refresh</button>
          <img src={refresh} alt="" className="h-4 ml-1" />
        </div>
      </div>
    </div>
  );
};

export default Scan;
