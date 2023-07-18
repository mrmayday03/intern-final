/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const Modal = ({ isOpen, closeModal, selectedRow }) => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleAction = () => {
    setShowSuccessModal(true);
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
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
              <th className="py-4 px-4 bg-blue-700 text-white rounded-tl-xl">Name</th>
              <th className="py-4 px-4 bg-blue-700 text-white">Task</th>
              <th className="py-4 px-4 bg-blue-700 text-white rounded-tr-xl">No. Of Tickets</th>
            </tr>
          </thead>
          <tbody>
            {selectedRow.map((row, index) => (
              <tr key={index}>
                <td className="py-2">{row.quantity}</td>
                <td className="py-2">{row.role}</td>
                <td className="py-2">
                  <button
                    className="text-blue-500 mr-2"
                    onClick={handleAction}
                  >
                    Assign
                  </button>
                  <button
                    className="text-blue-500"
                    onClick={handleAction}
                  >
                    Locate
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-end mt-4">
          <button
            className="px-4 py-2 bg-gray-200 text-gray-600 rounded-lg"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </div>

      {showSuccessModal && (
        <div
          className="fixed inset-0 flex items-center justify-center"
          onClick={closeSuccessModal}
        >
          <div className="bg-white rounded-lg p-6">
            <p>Success!</p>
            <button
              className="px-4 py-2 bg-gray-200 text-gray-600 rounded-lg mt-4"
              onClick={closeSuccessModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
