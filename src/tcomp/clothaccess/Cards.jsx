/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// import React, { useState, useEffect } from "react";

// const Cards = () => {
//   const [data, setData] = useState({ eventsCategory: [], pimCategory: [] });

//   useEffect(() => {
//     fetch("http://localhost:5000/api/data")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return response.json();
//       })
//       .then((responseData) => {
//         const processedData = processData(responseData);
//         setData(processedData);
//       })
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);

//   const processData = (responseData) => {
//     let wdata = [];
//     const eventsCategoryData = responseData.eventsCategory[0];
//     responseData.pimCategory.forEach((pimItem) => {
//       const [category, dress, gender] = Object.keys(pimItem)[0].split("_");
//       const pimCountValue = pimItem[Object.keys(pimItem)[0]];
  
//       const eventKey = `${category}_${dress}_${gender}`;
//       const eventCount = responseData.eventsCategory[0][eventKey] || 0;
//       const percentage = pimCountValue !== 0 ? ((eventCount / pimCountValue) * 100).toFixed(0) : 0;
  
//       // Create a new object for each iteration
//       const dataObject = {
//         subcategory: dress,
//         gender: gender,
//         pimCountValue: pimCountValue,
//         eventCount: eventCount,
//         percentage: percentage,
//       };
  
//       // Push the new object into the wdata array
//       wdata.push(dataObject);
//     });
  
//     console.log("Male Data:", wdata);

//     return { eventsCategory: eventsCategory, pimCategory: pimCategoryData };
//   };

//   // Function to create the small cards showing dress details and percentage
//   const createDressCard = (item) => {
//     return (
//       <div
//         key={item.subcategory}
//         className="bg-blue-500 text-center shadow-2xl p-4 text-white hover:bg-white hover:text-blue-500 border-2 border-blue-500 rounded-lg"
//       >
//         <h2 className="text-xl font-roboto font-bold">{item.subcategory}</h2>
//         <p>Percentage: {item.percentage}%</p>
//       </div>
//     );
//   };

//   // Function to create a gender card with embedded dress cards
//   const createGenderCard = (gender, genderData) => {
//     return (
//       <div className="p-4 border border-gray-300 rounded shadow-md mb-4">
//         <h2 className="text-lg font-semibold mb-2">{gender === 'M' ? 'Men' : 'Women'}</h2>
//         <div className="grid grid-cols-4 gap-4">
//           {genderData.map(createDressCard)}
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div>
//       {/* Render gender cards with embedded dress cards */}
//       <div className="flex space-x-4">
//         {createGenderCard('M', data.pimCategory.filter(item => item.gender === 'M'))}
//         {createGenderCard('W', data.pimCategory.filter(item => item.gender === 'W'))}
//       </div>
//     </div>
//   );
// };

// export default Cards;




import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import caution from '../../assets/icons/warning_.svg';
const Cards = () => {
  const [data, setData] = useState({ eventsCategory: [], pimCategory: [] });
  const nav = useNavigate();
  const nextPage = () => {
    nav("/clothing/menswear");
  };
  useEffect(() => {
    fetch("http://localhost:5000/api/data")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((responseData) => {
        const processedData = processData(responseData);
        setData(processedData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const processData = (responseData) => {
    let wdata = []; // Initialize wdata here

    const eventsCategoryData = responseData.eventsCategory.length > 0
      ? responseData.eventsCategory[0]
      : {};

    responseData.pimCategory.forEach((pimItem) => {
      const [category, dress, gender] = Object.keys(pimItem)[0].split("_");
      const pimCountValue = pimItem[Object.keys(pimItem)[0]];
      const eventKey = `${category}_${dress}_${gender}`;
      const eventCount = eventsCategoryData[eventKey] || 0;
      const percentage = pimCountValue !== 0 ? ((eventCount / pimCountValue) * 100).toFixed(0) : 0;
      const dataObject = {
        subcategory: dress,
        gender: gender,
        pimCountValue: pimCountValue,
        eventCount: eventCount,
        percentage: percentage,
      };
      console.log("console2", dataObject);
      console.log("console3", wdata.length);
      wdata.push(dataObject);
    });
    console.log("Male Data:", wdata);

    const pimCategoryData = responseData.pimCategory.map((item) => {
      const [category, dress, gender] = Object.keys(item)[0].split("_");
      const pimCount = responseData.pimCategory.find(
        (pimItem) => Object.keys(pimItem)[0] === Object.keys(item)[0]
      );
      const eventCount = item[Object.keys(item)[0]];
      const pimCountValue = pimCount ? pimCount[Object.keys(pimCount)[0]] : 0;
      const percentage =
        pimCountValue !== 0 ? ((eventCount / pimCountValue) * 100).toFixed(0) : 100;
      return {
        category,
        dress,
        gender,
        eventCount,
        pimCountValue,
        pimCount,
        percentage,
      };
    });

    return { eventsCategory: eventsCategoryData, pimCategory: pimCategoryData, wdata: wdata };
  };

  // Function to create the small cards showing dress details and percentage
  const createDressCard = (item, index) => {
    const isDanger = item.percentage < 100;
    const cardClasses = `bg-${isDanger ? 'red' : 'blue'}-100 text-${isDanger ? 'red-500' : 'blue-500'} shadow-2xl p-4 hover:bg-red-500 hover:text-white border-2 border-${isDanger ? 'red' : 'blue'}-500 rounded-lg flex justify-between items-center`;
  
    return (
      <div key={item.subcategory} className={cardClasses} onClick={nextPage}>
        <div className="text-left">
          <h2 className="text-xl font-roboto font-bold w-[10rem]">{item.subcategory}</h2>
        </div>
        <div className="text-right flex flex-row">
          <p className={isDanger ? 'w-[10px]' : ''}>
          {isDanger && (
            <img src={caution} alt="Danger" className="h-4 w-4 p-0 ml-[12rem]"  />
        )}
          </p>
          <p className="mb-15">{item.percentage}%</p>

        </div>
      </div>
    );
  };

  // Function to create a gender card with embedded dress cards
  const createGenderCard = (gender) => {
    const genderData = data.wdata.filter((item) => item.gender === gender);
  
    return (
      <div className="p-4 border bg-white border-gray-300 rounded-3xl shadow-md mb-4 h-[80vh]  xl:w-[25rem] ">
        <h2 className="text-lg font-semibold mb-2 p-[20px]">{gender === 'M' ? 'Mens Category' : 'Womens Category'}</h2>
        <div className="grid grid-rows gap-4">
          {genderData.length === 0 ? (
            <div className="text-center text-gray-500">No data found</div>
          ) : (
            genderData.map(createDressCard)
          )}
        </div>
      </div>
    );
  };

  return (
    <div>
      {/* Render gender cards with embedded dress cards */}
      {data.eventsCategory.length === 0 || data.pimCategory.length === 0 ? (
        <div>No data found for this category.</div>
      ) : (
        <div className="grid grid-flow-col m-10">
          {createGenderCard('M')}
          {createGenderCard('W')}
          {createGenderCard('K')}
        </div>
      )}
    </div>
  );
};

export default Cards;





// import React, { useEffect, useState } from 'react';
// import caution from '../../assets/icons/warning_.svg';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const categoryData = [
//   {
//     category: "Men's category",
//     cards: [
//       { name: "Jeans & Pants", percent: "70%", caution: true },
//       { name: "Formal T-shirt", percent: "79%", caution: false },
//       { name: "Casual T-shirt", percent: "79%", caution: false },
//       { name: "Casual T-shirt", percent: "79%", caution: false },
//       { name: "Casual T-shirt", percent: "79%", caution: false },
//     ],
//   },
//   {
//     category: "Women's category",
//     cards: [
//       { name: "Jeans & Pants", percent: "70%", caution: true },
//       { name: "Formal T-shirt", percent: "79%", caution: false },
//       { name: "Casual T-shirt", percent: "79%", caution: false },
//       { name: "Casual T-shirt", percent: "79%", caution: false },
//       { name: "Casual T-shirt", percent: "79%", caution: false },
//     ],
//   },
//   {
//     category: "Kid's category",
//     cards: [
//       { name: "Jeans & Pants", percent: "70%", caution: true },
//       { name: "Formal T-shirt", percent: "79%", caution: false },
//       { name: "Casual T-shirt", percent: "79%", caution: false },
//       { name: "Casual T-shirt", percent: "79%", caution: false },
//       { name: "Casual T-shirt", percent: "79%", caution: false },
//     ],
//   },
// ];

// const Cards = () => {
//   const navigate = useNavigate();

//   const [eventData, setEventData] = useState({});

//   const fetchData = async () => {

//     // await fetch("http://localhost:5000/api/data")
//     //  .then(response => response.json())
//     //  .then(data => { setEventData(data)})

//     //  .catch(error => console.log(error))

//     const response = await axios.get("http://localhost:5000/api/data");
//     console.log(response.data);
//     setEventData(...eventData,response.data);

//     console.log(eventData)
//   }

//   useEffect(()=>{
//      fetchData();
//     //  console.log(eventData);
// },)

//   const handleCategoryClick = () => {
//     navigate('/clothing/menswear');
//   };

//   return (
//     <div className="bg-blue-100 rounded-lg p-4 relative flex justify-around top-[3vh] h-[50vh] lg:w-[70vw]  lg:h-[] ">
//     {categoryData.map((category, index) => (
//       <div
//         className="bg-white rounded-2xl p-4 flex flex-col justify-around h-[65vh]  xl:ml-[10vh] lg:h-[65vh] lg:ml-10 items-center lg:w-[20vw] "
//         key={index}
//         role="button"
//       >
//         <p className="text-blue-800 font-semibold mb-4 lg:mb-1">{category.category}</p>
//         {category.cards.map((card, cardIndex) => (
//           <div
//             className={`${
//               cardIndex === 0 ? 'border-red-500 text-red-600 bg-red-100' : 'border-blue-500'
//             } xl:p-[3rem] border-2 border-solid rounded-2xl bg-${
//               cardIndex === 0 ? 'red' : 'blue'
//             }-200 flex justify-around m-2 lg:m-1 h-1 items-center text-${
//               cardIndex === 0 ? 'red ' : 'blue'
//             }-500 px-4 py-10 lg:py-7 lg:px-2 lg:w-[13rem] `}
//             key={cardIndex}
//             onClick={handleCategoryClick}

//           >
//             <p className='lg:text-sm xl:text-lg text-center' >{card.name}</p>
//             {card.caution && <img className="h-4" src={caution} alt="Caution" />}
//             <p>{card.percent}</p>
//           </div>
//         ))}
//         {/* <img className="h-1" src={downChevron} alt="" /> */}
//       </div>
//     ))}
//   </div>
//   );
// };

// export default Cards;
