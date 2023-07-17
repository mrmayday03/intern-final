import React from "react";
import backbtn from "../../assets/icons/back button.svg";
import filter from "../../assets/icons/filter icon.svg";
import Cards from "./Cards";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/header";

const ClothAccess = () => {
  return (
    <>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex flex-1 flex-col">
          <Header />
          <div className="w-4/5 bg-blue-100   rounded-xl p-4">
            <div className="flex justify-between items-center ">
              <div className="flex items-center gap-4">
                <img src={backbtn} alt="" className="h-8" />
                <p className="text-gray-700 font-semibold">
                  Clothing & Accessories
                </p>
              </div>
              <div className="flex items-center gap-4 mr-[5rem]">
                <img src={filter} alt="" className="h-5" />
                <p className="text-gray-700">Sort by</p>
                <p className="text-blue-700 underline"> Non-compliance</p>
              </div>
            </div>
          </div>
          <Cards />
        </div>
      </div>
    </>
  );
};

export default ClothAccess;
