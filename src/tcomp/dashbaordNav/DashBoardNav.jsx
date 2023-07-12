import React from 'react';
import downChevron from '../../assets/icons/scroll arrow.svg';

const DashBoardNav = () => {
  return (
    <>
      <div className="nav rounded-br-2xl h-12 w-80 fixed top-0 left-20vw bg-white shadow-lg flex justify-center items-center">
        <div className="scan-detail flex justify-between items-center text-blue-500 text-sm">
          <p className="p-2">Last Scan 07.11.2027</p>
          <p className="p-2">05:34 PM</p>
          <p className="p-2">Store ID -7943</p>
        </div>
        <span id="line" className="w-0.5 h-40 bg-gray-500 ml-16"></span>
        <div className="user flex justify-between items-center text-blue-500 ml-20">
          <p className="role underline text-blue-700">Store Supervisor</p>
          <img className="downChevron h-2 text-blue-500 mt-3 ml-0" src={downChevron} alt="" />
          <p className="p-2">John Doe</p>
          <span id="round" className="inline-block w-8 h-8 rounded-full bg-gray-300"></span>
        </div>
      </div>
    </>
  );
};

export default DashBoardNav;
