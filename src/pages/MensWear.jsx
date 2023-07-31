import React from "react";
import ProductList from "../components/ProductList";
import NonCompliantProducts from "../components/NonCompliantProducts";
import LocateProducts from "../components/LocateProducts";
import InventoryDetails from "../components/InventoryDetails";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";

const MensWear = () => {
  const breadcrumbItems = ['Home', 'Categories', 'Clothing & Accessories', 'Menswear'];
  const breadcrumbUrls = ['/categories', '/categories', '/cloth-accessories', '/clothing/menswear'];
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <Header />
        {/* Right Side */}
        <div className="flex p-5 xl:mr-[3rem] lg:mr-[16rem] xl:w-[1550px] lg:text-sm lg:p-2">
        

          <div className="flex flex-rows font-bold text-xl items-center">
            <Breadcrumb items={breadcrumbItems} urls={breadcrumbUrls} /> 
            <div className="font-semibold xl:m-5 text-gray-600 xl:pl-[700px] lg:text-lg lg:pl-[140px]">Sort by:</div>
            <div className="xl:m-5 lg:pl-2 lg:text-sm underline">Non-Compliance Score</div>
          </div>
        </div>
        <div className="flex flex-1 p-4">
          <div className="pr-2 pl-10 flex flex-col">
            <div className="bg-white rounded-3xl shadow-lg p-4 flex-1 lg:w-[20vw] lg:h-full lg:-ml-[2rem] xl:w-[24vw] xl:ml-10 ">
              <h2 className="lg:text-sm xl:text-xl  text-gray-500  font-bold  pt-10   lg:pt-1 lg:mb-3 ">
                List of Products
              </h2>
              <ProductList />
            </div>
          </div>

          <div className="flex-1 pl-4 flex flex-col ">
            <div className="bg-white rounded-3xl shadow-lg p-4 xl:h-[25rem] lg:h-[20rem] lg:w-[40rem] xl:w-[50vw] xl:ml-[5rem] ">
              <NonCompliantProducts />
            </div>

            <div className="flex space-x-4 flex-1">
              <div className="flex lg:h">
                <LocateProducts />
              </div>
              <div className="flex-1 ">
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
