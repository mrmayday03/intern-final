import React from "react";
import ProductList from "../components/ProductList";
import NonCompliantProducts from "../components/NonCompliantProducts";
import LocateProducts from "../components/LocateProducts";
import InventoryDetails from "../components/InventoryDetails";
import Sidebar from "../components/Sidebar";
import Header from "../components/header";

const MensWear = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <Header />
        {/* Right Side */}
        <div className="flex p-5 text-xl">
          <div className="flex-1 font-bold"></div> 
          <div className="font-semibold">
          Sort by &nbsp;
          </div>
          <div className="underline-offset-auto">Non-Compliance Score</div> 
        </div>
        <div className="flex flex-1 p-4">
          <div className="pr-2 pl-10 flex flex-col">
            <div className="bg-white rounded-3xl shadow-lg p-4 flex-1">
              <h2 className="text-lg font-semibold text-center pt-10 mb-4">List of Products</h2>
              <ProductList />
            </div>
          </div>

          <div className="flex-1 pl-4 flex flex-col">
            <div className="bg-white rounded-3xl shadow-lg p-4 flex-1">
              <NonCompliantProducts />
            </div>

            <div className="flex space-x-4 flex-1">
              <div className="flex-1">
                <LocateProducts />
              </div>
              <div className="flex-1">
                <InventoryDetails />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MensWear;
