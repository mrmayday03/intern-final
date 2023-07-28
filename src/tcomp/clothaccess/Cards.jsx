import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cards = () => {
  const [data, setData] = useState({ eventsCategory: [], pimCategory: [] });


  useEffect(() => {
    // Fetch data from your backend
    fetch('http://localhost:5000/api/data')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((responseData) => {
        console.log('API Response Data:', responseData); // Log the API response data
        // Process the data directly and set it to state
        const processedData = processData(responseData);
        setData(processedData);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  let mdata = {};
  let wdata = [];


  // Function to process the data and split strings
  const processData = (responseData) => {
    responseData.pimCategory.map((pimItem) => {
      const [category, dress, gender] = Object.keys(pimItem)[0].split("_");
      console.log("console1",dress)
      const pimCountValue = pimItem[Object.keys(pimItem)[0]];
      mdata["subcategory"] = dress;
      mdata["gender"] = gender;
      mdata["pimCountValue"] = pimCountValue;
      console.log("console2",mdata)
      console.log("console3",wdata.length)
      wdata.push(mdata);
    });
    console.log('Male Data:', wdata);
    //console.log('Female Data:', wdata);

    const eventsCategoryData = responseData.eventsCategory.map((item) => {
      const mdata = [];
      const wdata = [];
      const [category, dress, gender] = Object.keys(item)[0].split("_");
      const eventCount = item[Object.keys(item)[0]];

      const pimCount = responseData.pimCategory.find(
        (pimItem) => Object.keys(pimItem)[0] === Object.keys(item)[0]
      );
      const pimCountValue = pimCount ? pimCount[Object.keys(pimCount)[0]] : 0;
      if (gender === 'M') {
        if (!mdata[dress]) {
          mdata[dress] = pimCountValue;
          mdata[dress] = pimCountValue;
        } else {
          mdata[dress] += pimCountValue;
        }
      } else if (gender === 'W') {
        if (!wdata[dress]) {
          wdata[dress] = pimCountValue;
        } else {
          wdata[dress] += pimCountValue;
        }
      }
      const percentage =
        pimCountValue !== 0 ? ((eventCount / pimCountValue) * 100).toFixed(0) : 100; // If pimCountValue is 0, set percentage to 100

      // console.log(category, dress, gender, eventCount, pimCountValue, percentage);
      // console.log(Object.keys(pimCount)[0]);
      // console.log(mdata);
      // console.log(wdata);
      return { category, dress, gender, eventCount, pimCountValue, percentage };
    });

    const pimCategoryData = responseData.pimCategory.map((item) => {
      const [category, dress, gender] = Object.keys(item)[0].split("_");
      const pimCount = responseData.pimCategory.find(
        (pimItem) => Object.keys(pimItem)[0] === Object.keys(item)[0]
      );
      const eventCount = item[Object.keys(item)[0]];
      const pimCountValue = pimCount ? pimCount[Object.keys(pimCount)[0]] : 0;
      const percentage =
        pimCountValue !== 0 ? ((eventCount / pimCountValue) * 100).toFixed(0) : 100;
      return { category, dress, gender, eventCount, pimCountValue, pimCount, percentage};
    });

    return { eventsCategory: eventsCategoryData, pimCategory: pimCategoryData };
  };

  // Define sample data for Kids category
  const kidsData = [
    {
      category: 'Skirt',
      brand: 'K',
      eventCount: 10,
      pimCountValue: 20,
      percentage: 50,
    },
    {
      category: 'Onesies',
      brand: 'K',
      eventCount: 5,
      pimCountValue: 15,
      percentage: 33,
    },
  ];

  // Function to create a table row for events category
  const createEventsCategoryTableRow = (item, index) => {
    return (
      <div key={index} className="flex flex-cols bg-blue-500 p-4 items-center text-white hover:bg-white hover:text-blue-500 border-2 border-blue-500 rounded-lg shadow-2xl">
        {/* <h2 className="text-xl font-roboto font-bold">{item.brand}</h2> */}
        <p>{item.dress}</p>
        <p>{item.percentage}%</p>
      </div>
    );
  };

  // Function to create a table row for pim category
  const createPimCategoryTableRow = (item, index) => {
    return (
      <div key={index} className="bg-blue-500 text-center shadow-2xl p-4 text-white hover:bg-white hover:text-blue-500 border-2 border-blue-500 rounded-lg">
        <h2 className="text-xl font-roboto font-bold">{item.brand}</h2>
        <p>Category: {item.dress}</p>
gender       <p>percentage: {item.percentage}</p>
      </div>
    );
  };

  return (
    <div>
      <div className="grid grid-cols-4 gap-4">
        {/* Render event category cards */}
        {data.eventsCategory.length === 0 ? (
          <div className="col-span-4">
            <NoDataFoundMessage />
          </div>
        ) : (
          data.eventsCategory.map(createEventsCategoryTableRow)
        )}

        {/* Render pim category cards */}
        {data.pimCategory.length === 0 ? (
          <div className="col-span-4">
            <NoDataFoundMessage />
          </div>
        ) : (
          data.pimCategory.map(createPimCategoryTableRow)
        )}
      </div>

      {/* Render kids category cards */}
      <div className="grid grid-cols-4 gap-4">
        {kidsData.map((item, index) => (
          <div
            key={index}
            className="bg-blue-500 text-center shadow-2xl p-4 text-white hover:bg-white hover:text-blue-500 border-2 border-blue-500 rounded-lg"
          >
            <h2 className="text-xl font-roboto font-bold">{item.brand}</h2>
            <p>Category: {item.category}</p>
            <p>Percentage: {item.percentage}%</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Function to display "No data found" message
const NoDataFoundMessage = () => {
  return <p>No data found for this category.</p>;
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