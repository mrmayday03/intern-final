import React from 'react';

const CompScan = () => {
  return (
    <div className="bg-white rounded-2xl p-4 top-[20vh]  w-[40vh] right-[15vw] lg:h-[8rem]">
      <p className="comp-title text-center w-[15rem] lg:w-[13rem] ml-20 text-xl font-bold text-gray-500 mb-2 lg:ml-5 lg:mb-1 lg:p-0">Overall Store Shelf Compliance</p>
      <p className="comp-percent text-red-500 text-center text-2xl font-bold lg:-mb-6 ">70%</p>
    </div>
  );
};

export default CompScan;
