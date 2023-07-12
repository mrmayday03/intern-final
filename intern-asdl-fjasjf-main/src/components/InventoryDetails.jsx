import React from "react";

const InventoryDetails = () => {
  // Your product inventory data
  const inventory = [
    { id: 1, name: "Product 1", quantity: 10 },
    { id: 2, name: "Product 2", quantity: 5 },
    // Add more products...
  ];

  const notifyManager = (productId) => {
    // Handle notifying the manager about quantity
    console.log(`Notify manager about product with ID: ${productId}`);
  };

  return (
    <div>
      <h2>Inventory Details</h2>
      <table className="table-auto">
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.quantity}</td>
              <td>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => notifyManager(product.id)}
                >
                  Notify
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryDetails;
