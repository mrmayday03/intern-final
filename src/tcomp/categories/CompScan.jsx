import React from 'react';

const CompScan = () => {
  return (
    <div className="compliance bg-white rounded-2xl p-4 absolute top-[20vh]  w-[40vh] right-[15vw]">
      <p className="comp-title text-center w-[15rem] ml-20 text-xl font-bold text-gray-500 mb-2">Overall Store Shelf Compliance</p>
      <p className="comp-percent text-red-500 text-center text-4xl font-bold">70%</p>
    </div>
  );
};

export default CompScan;
