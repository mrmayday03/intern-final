/* eslint-disable react/prop-types */
import React, { useState } from "react";

const Modal = ({ isOpen, closeModal, selectedRow }) => {
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [selectedRecipient, setSelectedRecipient] = useState("");

  const handleChangeRecipient = (event) => {
    setSelectedRecipient(event.target.value);
    setShowConfirmationModal(true);
  };

  const handleConfirm = () => {
    setShowConfirmationModal(false);
    setShowSuccessModal(true);
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
    closeModal();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-4">Table</h2>
        <table className="w-full">
          <thead>
            <tr>
              <th className="py-4 px-4 bg-blue-700 text-white rounded-tl-xl">
                Name
              </th>
              <th className="py-4 px-4 bg-blue-700 text-white">Task</th>
              <th className="py-4 px-4 bg-blue-700 text-white rounded-tr-xl">
                No. Of Tickets
              </th>
            </tr>
          </thead>
          <tbody>
            {selectedRow.map((row, index) => (
              <tr key={index}>
                <td className="py-2 text-center">{row.quantity}</td>

                <td className="py-2 items-center">
                  <select
                    className="p-2 rounded"
                    value={selectedRecipient}
                    onChange={handleChangeRecipient}
                  >
                    <option value="">Assign</option>
                    <option value="Locate">Locate</option>
                  </select>
                </td>
                <td className="py-2 text-center">{row.tickets}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showConfirmationModal && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={() => setShowConfirmationModal(false)}
        >
          <div className="bg-white rounded-lg p-6">
            <p className="text-gray-800 text-lg mb-4">
              Are you sure you want to assign the task?
            </p>
            <div className="flex justify-end">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-lg mr-2"
                onClick={handleConfirm}
              >
                Confirm
              </button>
              <button
                className="px-4 py-2 bg-gray-200 text-gray-600 rounded-lg"
                onClick={() => setShowConfirmationModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {showSuccessModal && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={closeSuccessModal}
        >
          <div className="bg-white rounded-lg p-6">
            <button
              className="p-2 text-xl border border-blue-600 rounded-full mt-4"
              onClick={closeSuccessModal}
            >
              ✖
            </button>
            <div className="flex items-center justify-center mb-4">
              <img src="/right icon.png" className="h-20 w-20" alt="Success Icon" />
            </div>
            <p className="text-blue-700 text-xl w-80 text-center">
              Inventory Notification sent to the Store Manager
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
