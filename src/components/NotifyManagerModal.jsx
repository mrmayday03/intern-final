/* eslint-disable react/prop-types */
import React, { useState } from "react";

const NotifyManagerModal = ({ isOpen, closeModal }) => {
  const [notificationText, setNotificationText] = useState("");
  const [selectedRecipient, setSelectedRecipient] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleChangeNotification = (event) => {
    setNotificationText(event.target.value);
  };

  const handleChangeRecipient = (event) => {
    setSelectedRecipient(event.target.value);
  };

  const handleSendNotification = () => {
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
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-1/2">
        <div className="mb-4">
          <h2 className="text-lg font-semibold">Inventory Management</h2>
        </div>
        <div className="h-1/3 flex flex-col justify-center mb-4">
          <textarea
            className="w-full h-full p-2 border border-gray-300 rounded"
            placeholder="Enter notification text"
            value={notificationText}
            onChange={handleChangeNotification}
          ></textarea>
        </div>
        <div className="mb-4 flex items-center">
          <p className="mr-2">Notification will be sent to:</p>
          <select
            className="p-2 border border-gray-300 rounded"
            value={selectedRecipient}
            onChange={handleChangeRecipient}
          >
            <option value="">Select recipient</option>
            <option value="Manager">Manager</option>
            <option value="Store Supervisor">Store Supervisor</option>
          </select>
        </div>
        <div className="flex justify-end">
          <button
            className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg"
            onClick={handleSendNotification}
          >
            Send
            <svg
              className="w-4 h-4 ml-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3.293 7.293a1 1 0 011.414-1.414L10 10.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

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
              <img src='/right icon.png' className="h-20 w-20"></img>
            </div>
            <p className="text-blue-700 text-xl w-80 text-center">Inventory Notification sent to the Store Manager</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotifyManagerModal;
