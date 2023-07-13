import React from "react";
import cloth from "../../assets/icons/Cloths and Accessories.svg";
import grocery from "../../assets/icons/Grocery.svg";
import health from "../../assets/icons/Health and beauty.svg";
import Home from "../../assets/icons/Home goods.svg";
import toy from "../../assets/icons/Toys.svg";
import elct from "../../assets/icons/electronic.svg";
import Header from "../../components/header";
import Sidebar from "../../components/Sidebar";
import CompScan from "./CompScan";
import Scan from "./Scan";


const categories = [
  {
    icon: cloth,
    name: "Clothing & Accessories",
    percent: "70%",
    color: "bg-red-500",
  },
  {
    icon: health,
    name: "Health & Beauty",
    percent: "76%",
    color: "bg-green-500",
  },
  {
    icon: toy,
    name: "Toys",
    percent: "76%",
    color: "bg-green-500",
  },
  {
    icon: grocery,
    name: "Grocery",
    percent: "70%",
    color: "bg-red-500",
  },
  {
    icon: Home,
    name: "Electronics",
    percent: "70%",
    color: "bg-green-500",
  },
  {
    icon: elct,
    name: "Electronics",
    percent: "70%",
    color: "bg-green-500",
  },
];

const CategoryCards = () => {
  return (
    // 
    <>
    <Header />
    <Sidebar />

    <div className="h-screen flex flex-row">
        
        <div className=" rounded-lg p-4 top-[30vh] ml-[25rem] fixed bg-white w-[40rem]  h-[60vh] ">
          <p className="text-center mb-4">Categories</p>
          <div className="grid grid-cols-2 grid-rows-3 gap-4">
            {categories.map((category, index) => (
              <div className={`card-type ${category.color} rounded-lg mx-8 my-2`} key={index}>
                <div className="content flex items-center justify-between">
                  <div className="left-side flex items-center w-[4rem] h-[6rem]">
                    <div className={`${category.color} bg-transparent rounded-full w-12 h-12 flex items-center justify-center mr-4 ml-10`}>
                      <div className="flex flex-col items-center">
                        <img src={category.icon} alt={category.name} className="w-6 h-6" />
                        <div className="card-title">{category.name}</div>
                      </div>
                    </div>
                  </div>
                  <div className="percent">{category.percent}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <CompScan />
        <Scan />

    </div>
       
        
      </>

    
  );
};

export default CategoryCards;
