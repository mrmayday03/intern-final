import React from "react";
import backbtn from "../../assets/icons/back button.svg";
import filter from "../../assets/icons/filter icon.svg";
import Cards from "./Cards";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";

const ClothAccess = () => {
  const navigate = useNavigate()
  const back =()=>{
    navigate('/categories')

  }

  return (
    <>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex flex-1 flex-col lg:w-[100vw]  ">
          <Header />
          <div className="w-4/5 lg:h-[100vh] lg:w-[100vw] bg-blue-100   rounded-xl p-4 lg:overflow-hidden xl:overflow-hidden ">
            <div className="flex justify-between items-center lg:w-[70vw] ">
              <div className="flex items-center gap-4  lg:ml-20 ">
                <img src={backbtn} alt="" className="h-8 " onClick={back} />
                <p className="text-gray-700 font-semibold">
                  Clothing & Accessories
                </p>
              </div>
              <div className="flex items-center gap-4 mr-[5rem] lg:mr-[5vw]">
                <img src={filter} alt="" className="h-5" />
                <p className="text-gray-700">Sort by</p>
                <p className="text-blue-700 underline"> Non-compliance</p>
              </div>

            </div>
            <Cards/>

          </div>

        </div>
      </div>
    </>
  );
};

export default ClothAccess;
