import React from 'react';
import cal from '../../assets/icons/cal.svg';
import clock from '../../assets/icons/clock.svg';
import refresh from '../../assets/icons/refresh.svg';

const Scan = () => {
  return (
    <div className="scan bg-white rounded-2xl p-4 h-[30vh] top-[42vh] w-[40vh] right-[15vw] mr-10vh lg:h-[40vh] lg:top-[35vh]  ">
      <p className="scan-title  text-gray-500 font-bold text-2xl lg:text-xl ">Scan report</p>
      <p className="last-scan text-gray-500 -mt-4 text-xl lg:text-lg lg:-mt-8">Last Scan:</p>
      <div className="time-stamp ">
        <div className="date flex items-center -mt-5 lg:-mt-8">
          <img src={cal} alt="" className="h-5 ml-5 lg:h-3 " />
          <p className="ques text-gray-500 text-lg lg:text-sm ">Date :</p>
          <p className="ans text-gray-500 font-bold -ml-4 text-lg  lg:text-sm " >07-09-2023</p>
        </div>
        <div className="time flex items-center -mt-5">
          <img src={clock} alt="" className="h-5 ml-5  lg:h-3" />
          <p className="ques text-gray-500 text-lg  lg:text-sm ">Time :</p>
          <p className="ans text-gray-500 font-bold -ml-4 text-lg  lg:text-sm ">05:34 PM</p>
        </div>
        <div className="status flex items-center -mt-6 ml-2 lg:-mt-8 ">
          <p className="ques text-gray-500 text-lg  lg:text-sm ">Scanner Status:</p>
          <p className="ans text-green-700 font-bold text-lg m-2 ml-1 lg:-ml-6">Inactive</p>
        </div>
        <div className="ref-btn flex items-center bg-blue-200 w-[7rem]  mx-0 rounded-[0.4rem] lg:ml-5 border-blue-600 lg:-mt-4 ">
          <button className=" px-2 py-1 rounded-md text-blue-700  text-sm font-semibold  ">Refresh</button>
          <img src={refresh} alt="" className="h-4 ml-1 " />
        </div>
      </div>
    </div>
  );
};

export default Scan;
