import React from "react";
import cloth from "../../assets/icons/Cloths and Accessories.svg";
import grocery from "../../assets/icons/Grocery.svg";
import health from "../../assets/icons/Health and beauty.svg";
import Home from "../../assets/icons/Home goods.svg";
import toy from "../../assets/icons/Toys.svg";
import elct from "../../assets/icons/electronic.svg";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import CompScan from "./CompScan";
import Scan from "./Scan";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { useEffect, useState } from "react";

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
    percent: "70%",
    color: "bg-gray-500",
  },
  {
    icon: toy,
    name: "Toys",
    percent: "60%",
    color: "bg-gray-500",
  },
  {
    icon: grocery,
    name: "Grocery",
    percent: "89%",
    color: "bg-gray-500",
  },
  {
    icon: Home,
    name: "Electronics",
    percent: "96%",
    color: "bg-gray-500",
  },
  {
    icon: elct,
    name: "Electronics",
    percent: "69%",
    color: "bg-gray-500",
  },
];

const CategoryCards = () => {
  const navigate = useNavigate();
  const [eventsCategory, setEventsCategory] = useState([]);
  const [pimCategory, setPimCategory] = useState([]);

  useEffect(() => {
    // Fetch data from the API endpoint using Axios
    axios
      .get("http://localhost:5000/api/data2")
      .then((response) => {
        setEventsCategory(response.data.eventsCategory);
        setPimCategory(response.data.pimCategory);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Function to calculate the percentage for the "Clothing & Accessories" category
  const calculateClothingPercentage = () => {
    const clothingEventCategory = eventsCategory.find(
      (item) => Object.keys(item)[0] === "Clothing and Accessories"
    );

    const clothingPimCategory = pimCategory.find(
      (item) => Object.keys(item)[0] === "Clothing and Accessories"
    );

    if (clothingEventCategory && clothingPimCategory) {
      const clothingEventCount = Object.values(clothingEventCategory)[0];
      const clothingPimCount = Object.values(clothingPimCategory)[0];

      const percentage = (
        (clothingEventCount / clothingPimCount) *
        100
      ).toFixed(0);
      return percentage + "%";
    } else {
      return null;
    }
  };

  const handleCardClick = () => {
    navigate('/cloth-accessories');
  };

  return (
    <>
      <div className="flex h-screen lg:overflow-hidden">
        <Sidebar />
        <div className="flex flex-1 flex-col">
          <Header />
          <div className="h-screen flex flex-row lg:w-[100vw]" >
            <div className="top-[20vh] left-[65vh] bg-white xl:w-[55vw] h-[75vh] lg:h-[75vh] lg:w-[30rem] m-10 rounded-2xl xl:p-4">
              <p className="ml-[2rem] lg:text-2xl xl:text-3xl text-gray-500 font-bold mb-4">Categories</p>
              <div className="grid grid-cols-2 gap-4 mb-10 xl:ml-[5rem] ">
                {categories.map((category, index) => (
                  <div
                    className={`card-type ${category.color} xl:w-[25rem] xl:h-[13rem] lg:h-[7rem] lg:w-[10rem] ml-8 xl:ml-8 rounded-2xl`}
                    key={index}
                    onClick={handleCardClick}
                    role="button"
                  >
                    <div className="content flex items-center justify-between p-4 ml-8">
                      <div className="left-side flex items-center">
                        <div className={`${category.color} bg-transparent rounded-full xl:w-20 xl:h-22 flex flex-col m-10 items-center justify-center lg:w-6 lg:h-6 lg:-ml-[1rem] xl:mt-[5rem] `}>
                          
                          <img src={category.icon} alt={category.name} className="xl:w-[30rem] xl:h-20 bg-transparent lg:w-5 lg:h-5 lg:mb-3 lg:-mt-9 " />
                          <div className="card-title text-white lg:w-25  lg:text-sm xl:text-xl">{category.name}</div>

                        </div>
                      </div>
                      <div className="percent text-white lg:text-2xl lg:-mt-7 xl:mr-[4rem] xl:text-4xl ">{category.percent}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          <div className="flex-rows lg:mt-10">
            <CompScan />
            <div className="mt-10">
              <Scan/>
            </div>
          </div>

          </div>
        </div>

      </div>
    </>
  );
};

export default CategoryCards;
