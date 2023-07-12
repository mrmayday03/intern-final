import React from 'react';

const LocateProducts = () => {
  // Your misplaced products data
  const misplacedProducts = [
    { id: 1, name: 'Product 1', qty: 2, location: 'A1' },
    { id: 2, name: 'Product 2', qty: 1, location: 'B3' },
    // Add more misplaced products...
  ];

  const handleAssignLocation = (productId) => {
    // Handle assigning location for the product
    console.log(`Assign location for product with ID: ${productId}`);
  };

  return (
    <div>
      <h2>Locate Products</h2>
      <table className="table-auto">
        <thead>
          <tr>
            <th>Qty</th>
            <th>Location</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {misplacedProducts.map((product) => (
            <tr key={product.id}>
              <td>{product.qty}</td>
              <td>{product.location}</td>
              <td>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleAssignLocation(product.id)}
                >
                  Assign
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LocateProducts;

