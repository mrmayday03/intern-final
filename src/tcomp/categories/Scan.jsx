import React from 'react';
import cal from '../../assets/icons/cal.svg';
import clock from '../../assets/icons/clock.svg';
import refresh from '../../assets/icons/refresh.svg';

const Scan = () => {
  return (
    <div className="scan bg-white rounded-lg p-4 fixed h-[35vh] top-[50vh] w-[40vh] right-[8vw] mr-10vh">
      <p className="scan-title text-center text-gray-700 font-bold text-lg m-3">Scan report</p>
      <p className="last-scan text-gray-700 m-3">Last Scan:</p>
      <div className="time-stamp m-3">
        <div className="date flex items-center">
          <img src={cal} alt="" className="h-5 mr-1 m-3" />
          <p className="ques text-gray-700 text-sm m-3">Date</p>
          <p className="ans text-gray-700 font-bold m-2 text-sm">07-09-2023</p>
        </div>
        <div className="time flex items-center">
          <img src={clock} alt="" className="h-5 mr-1 m-3" />
          <p className="ques text-gray-700 text-sm m-2">Time</p>
          <p className="ans text-gray-700 font-bold text-sm m-3">05:34 PM</p>
        </div>
        <div className="status flex items-center">
          <p className="ques text-gray-700 text-sm m-3">Scanner Status:</p>
          <p className="ans text-green-700 font-bold text-sm m-2 ml-1">Inactive</p>
        </div>
        <div className="ref-btn flex items-center bg-blue-200 w-[7rem]  rounded-[0.4rem]   justify-center align-center">
          <button className=" px-2 py-1 rounded-md text-blue-700 text-sm font-semibold">Refresh</button>
          <img src={refresh} alt="" className="h-4 ml-1" />
        </div>
      </div>
    </div>
  );
};

export default Scan;
