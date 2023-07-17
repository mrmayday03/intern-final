import React, { useState } from "react";

const LocateProducts = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const locatedProducts = [
    {
      id: 1,
      quantity: "01",
      location: "In trial room# 04",
    },
  ];

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="bg-white w-90 lg:w-[18rem] lg:bottom-[3rem] lg:h-[10rem] lg:mt-5 h-full pl-10 shadow-md rounded-3xl mt-10">
      <div className="mb-0">
        <div className="text-l font-bold text-slate-500">Locate Products</div>
        <div className="text-slate-600 text-xs font-semibold">
          Products Misplaced
        </div>
      </div>
      <table className="table-auto mt-1 w- rounded border-separate border-spacing-y-[2px]">
        <thead className="text-normal">
          <tr className="bg-blue-100 text-slate-400 text-sm">
            <th className="py-2 px-4 rounded-l text-left">QTY</th>
            <th className="py-2 px-4 rounded-r text-left">Location</th>
          </tr>
        </thead>
        <tbody className="">
          {locatedProducts.map((product) => (
            <tr key={product.id} className="bg-blue-100 font-bold text-blue-800">
              <td className="py-2 px-4 rounded-l text-sm">
                {product.quantity}
              </td>
              <td className="py-2 px-4 rounded-r text-sm">
                {product.location}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex flex-col gap-2 mt-3">
        <div className="text-slate-600 text-xs font-light">
          Recommended Action
        </div>
        <button
          className="bg-blue-100 px-2 border-2 border-blue-600 text-blue-800 rounded-lg w-28 h-10"
          onClick={openModal}
        >
          Assign
        </button>
      </div>

      {modalOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          {/* Modal Content */}
          <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center w-[40vw] h-[40vh]  ">
            <div className="flex items-center justify-center rounded-full w-[10rem] h-[10rem] mb-4 ">
              <img src="/right icon.png" alt="" />
            </div>
            <p className="text-center  font-medium w-[30rem] text-4xl text-blue-600 mb-4">
              Inventory notification sent to store Manager
            </p>
            <button
              data-modal-hide="popup-modal"
              type="button"
              className="text-blue-500 bg-white w-[10rem] h-[5rem] text-2xl hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200  font-medium px-5 py-2.5 hover:text-blue-900 focus:z-10"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LocateProducts;
