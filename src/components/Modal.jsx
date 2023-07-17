import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Fragment } from 'react';

// Modal component
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
    <Fragment>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Table</h2>
          <table className="w-full">
            <thead>
              <tr>
                <th className="py-2">Quantity</th>
                <th className="py-2">Role</th>
                <th className="py-2">Actions</th>
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
      </div>

      {showSuccessModal && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
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
    </Fragment>
  );
};

// Notify Manager Modal component
const NotifyManagerModal = ({ isOpen, closeModal }) => {
  const [notificationText, setNotificationText] = useState('');
  const [selectedRecipient, setSelectedRecipient] = useState('');
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
            <p>Notification sent!</p>
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

// Main component
const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNotifyManagerModalOpen, setIsNotifyManagerModalOpen] =
    useState(false);
  const [selectedRow, setSelectedRow] = useState([]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openNotifyManagerModal = () => {
    setIsNotifyManagerModalOpen(true);
  };

  const closeNotifyManagerModal = () => {
    setIsNotifyManagerModalOpen(false);
  };

  const handleAssign = () => {
    // Perform assign action here
    openSuccessModal();
  };

  const handleLocate = () => {
    // Perform locate action here
    openSuccessModal();
  };

  const openSuccessModal = () => {
    setSelectedRow([]); // Reset selectedRow array
    setIsModalOpen(false); // Close the main modal
    setShowSuccessModal(true); // Open the success modal
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
  };

  const rows = [
    { quantity: 1, role: 'Role 1' },
    { quantity: 2, role: 'Role 2' },
    // Add more rows as needed
  ];

  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold mb-4">Main Website Page</h1>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-lg mr-2"
        onClick={openModal}
      >
        Assign
      </button>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        onClick={openNotifyManagerModal}
      >
        Notify Manager
      </button>

      <Modal isOpen={isModalOpen} closeModal={closeModal} selectedRow={rows} />
      <NotifyManagerModal
        isOpen={isNotifyManagerModalOpen}
        closeModal={closeNotifyManagerModal}
      />
      {showSuccessModal && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
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

ReactDOM.render(<App />, document.getElementById('root'));
