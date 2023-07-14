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
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/cloth-accessories');
  };

  return (
    <>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex flex-1 flex-col">
          <Header />
          <div className="h-screen flex flex-row">
            <div className="top-[20vh] left-[65vh] bg-white w-[50rem] h-[65vh] m-10 rounded-2xl p-4">
              <p className="ml-[2rem] text-2xl text-gray-500 font-bold mb-4">Categories</p>
              <div className="grid grid-cols-2 gap-4">
                {categories.map((category, index) => (
                  <div
                    className={`card-type ${category.color} rounded-2xl`}
                    key={index}
                    onClick={handleCardClick}
                    role="button"
                  >
                    <div className="content flex items-center justify-between p-4">
                      <div className="left-side flex items-center">
                        <div className={`${category.color} bg-transparent rounded-full w-12 h-12 flex items-center justify-center mr-4`}>
                          <img src={category.icon} alt={category.name} className="w-10 h-10 bg-transparent" />
                        </div>
                        <div className="card-title text-white">{category.name}</div>
                      </div>
                      <div className="percent text-white text-2xl">{category.percent}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          <div className="flex-rows m-10">
            <CompScan />
            <div className="mt-10"><Scan /></div>
          </div>

          </div>
        </div>

      </div>
    </>
  );
};

export default CategoryCards;
