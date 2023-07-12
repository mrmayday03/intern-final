import React from 'react';
import ProductList from '../components/ProductList';
import NonCompliantProducts from '../components/NonCompliantProducts';
import LocateProducts from '../components/LocateProducts';
import InventoryDetails from '../components/InventoryDetails'; 

const MensWear = () => {
  return (
    <div className="flex">
      {/* Left Side */}
      <div className="w-1/3 p-4">
        <div className="bg-white rounded-lg shadow-lg p-4">
          <h2 className="text-lg font-semibold mb-4">Product List</h2>
          <ProductList />
        </div>
      </div>

      {/* Right Side */}
      <div className="w-2/3 p-4">
        <div className="flex flex-col h-full space-y-4">
          {/* Upper Section */}
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-lg font-semibold mb-4">Non-Compliant Products</h2>
            <NonCompliantProducts />
          </div>

          {/* Lower Section */}
          <div className="flex space-x-4">
            <div className="w-1/2 bg-white rounded-lg shadow-lg p-4">
              <h2 className="text-lg font-semibold mb-4">Locate Products</h2>
              <LocateProducts />
            </div>
            <div className="w-1/2 bg-white rounded-lg shadow-lg p-4">
              <h2 className="text-lg font-semibold mb-4">Inventory Details</h2>
              <InventoryDetails />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MensWear;
