import React, { useState } from "react";
import Modal from "./Modal";

const LocateProducts = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const locatedProducts = [
    {
      id: 1,
      quantity: "01",
      name: "John Doe",
      role: "Store Supervisor",
      tickets: "02",
      location: "In trial room# 04",
    },
    {
      id: 2,
      quantity: "02",
      name: "Jane Doe",
      role: "Store Supervisor",
      tickets: "03",
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
    <div className="bg-white xl:w-90 lg:w-[19rem]  lg:bottom-[3rem] lg:h-[18rem]  h-full pl-10 shadow-md rounded-3xl mt-10  xl:w-[30rem]  xl:bottom-[3rem] xl:h-[24rem] xl:mt-5 lg:mt-8 xl:ml-[5rem] ">
      <div className="mb-0 lg:my-2 lg:pt-2">
        <div className="text-l font-bold text-slate-500 xl:text-xl lg:text-lg xl:my-5 ">Locate Products</div>
        <div className="text-slate-600 xl:text-xl lg:text-lg font-semibold">
          Products Misplaced
        </div>
      </div>
      <table className="table-auto mt-1 w- rounded border-separate ">
        <thead className="text-normal ">
          <tr className="bg-blue-100 text-slate-400 lg:text-sm xl:text-lg">
            <th className="py-2 px-4 rounded-l text-left">QTY</th>
            <th className="py-2 px-4 rounded-r text-left">Location</th>
          </tr>
        </thead>
        <tbody className="">
          {locatedProducts.map((product) => (
            <tr
              key={product.id}
              className="bg-blue-100 font-bold text-blue-800 lg:text-sm xl:text-lg"
            >
              <td className="py-2 px-4 rounded-l  ">
                {product.quantity}
              </td>
              <td className="py-2 px-4 rounded-r ">
                {product.location}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex flex-col gap-2 mt-3">
        <div className="text-slate-600 lg:text-lg xl:text-xl font-semibold">
          Recommended Action
        </div>
        <button
          className="bg-blue-100 px-2 border-2 border-blue-600 text-blue-800 rounded-lg xl:w-28 xl:h-12  lg:mr-7     lg:w-15 lg:py-1 lg:mb-3"
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
