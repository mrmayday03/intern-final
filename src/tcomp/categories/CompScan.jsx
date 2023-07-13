import React from 'react';

const CompScan = () => {
  return (
    <div className="compliance bg-white rounded-lg p-4 absolute top-[30vh]  w-[40vh] right-[8vw]">
      <p className="comp-title text-center mb-2">Overall Store Shelf Compliance</p>
      <p className="comp-percent text-red-500 text-center text-3xl font-bold">70%</p>
    </div>
  );
};

export default CompScan;
