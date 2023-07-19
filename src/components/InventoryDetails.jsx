/* eslint-disable react/jsx-no-undef */
import React, { useState } from 'react';
import NotifyManagerModal from './NotifyManagerModal';

const InventoryDetails = () => {
  const quantities = [
    {
      id: 1,
      quantity: '12',
    },
  ];

  const [showNotifyManagerModal, setShowNotifyManagerModal] = useState(false);
  const [showTableModal, setShowTableModal] = useState(false);

  const openNotifyManagerModal = () => {
    setShowNotifyManagerModal(true);
  };

  const closeNotifyManagerModal = () => {
    setShowNotifyManagerModal(false);
  };

  return (
    <div className="bg-white w-90 h-80  lg:h-[18rem]  lg:w-[18rem] p-3 px-6 pb-14 shadow-md pr-8 rounded-3xl mt-10 ml-10 lg:mr-[20vw] xl:w-[28rem] xl:h-[24rem] lg:mt-8  xl:mt-5  xl:mr-4 ">
      <div className="mb-2">
        <div className="lg:text-lg xl:text-xl font-bold text-slate-600 lg:my-2 xl:my-4 ">Inventory Details</div>
        <div className="text-slate-600  lg:text-lg xl:text-xl font-semibold">Product Inventory</div>
      </div>
      <div>
        <table className="table-auto mt-1 rounded border-separate border-spacing-[2px]">
          <tbody>
            {quantities.map((quantity) => (
              <tr key={quantity.id}>
                <td className="bg-blue-100 text-slate-500 lg:text-sm xl:text-lg lg:py-2 xl:py-4 lg:pl-6  lg:px-4 xl:px-7 rounded-l">
                  QTY
                </td>
                <td className="bg-blue-100 py-2 px-8 pr-14 rounded-r text-blue-800 text-sm">
                  {quantity.quantity} units
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col gap-2 mt-3">
        <div className="text-slate-600 xl:text-xl lg:text-lg font-semibold">Recommended Action</div>
        <button
          className="bg-blue-100 border-2 border-blue-600 text-blue-800 rounded-lg w-40 h-10"
          onClick={openNotifyManagerModal}
        >
          Notify manager
        </button>
      </div>

      {showNotifyManagerModal && (
        <NotifyManagerModal isOpen={true} closeModal={closeNotifyManagerModal} />
      )}

      {showTableModal && (
        <Modal isOpen={true} closeModal={() => setShowTableModal(false)} selectedRow={[]} />
      )}
    </div>
  );
};

export default InventoryDetails;
