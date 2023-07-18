import React, { useState } from "react";
import Modal from "./Modal";

const LocateProducts = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const locatedProducts = [
    {
      id: 1,
      quantity: "01",
      location: "In trial room# 04",
    },
    {
      id: 2,
      quantity: "02",
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
    <div className="bg-white w-90 lg:w-[18rem] lg:bottom-[3rem] lg:h-[15rem] lg:mt-5 h-full pl-10 shadow-md rounded-3xl mt-10">
      <div className="mb-0 lg:my-4 lg:pt-2">
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
            <tr
              key={product.id}
              className="bg-blue-100 font-bold text-blue-800"
            >
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
        <Modal
          isOpen={modalOpen}
          closeModal={closeModal}
          selectedRow={locatedProducts}
        />
      )}
    </div>
  );
};

export default LocateProducts;
