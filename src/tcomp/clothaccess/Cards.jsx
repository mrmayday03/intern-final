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
//   //   <div className="bg-blue-100 rounded-lg p-4 relative flex justify-around top-[3vh] h-[50vh] lg:w-[70vw]  lg:h-[] ">
//   //   {categoryData.map((category, index) => (
//   //     <div
//   //       className="bg-white rounded-2xl p-4 flex flex-col justify-around h-[65vh]  xl:ml-[10vh] lg:h-[65vh] lg:ml-10 items-center lg:w-[20vw] "
//   //       key={index}
//   //       role="button"
//   //     >
//   //       <p className="text-blue-800 font-semibold mb-4 lg:mb-1">{category.category}</p>
//   //       {category.cards.map((card, cardIndex) => (
//   //         <div
//   //           className={`${
//   //             cardIndex === 0 ? 'border-red-500 text-red-600 bg-red-100' : 'border-blue-500'
//   //           } xl:p-[3rem] border-2 border-solid rounded-2xl bg-${
//   //             cardIndex === 0 ? 'red' : 'blue'
//   //           }-200 flex justify-around m-2 lg:m-1 h-1 items-center text-${
//   //             cardIndex === 0 ? 'red ' : 'blue'
//   //           }-500 px-4 py-10 lg:py-7 lg:px-2 lg:w-[13rem] `}
//   //           key={cardIndex}
//   //           onClick={handleCategoryClick}

//   //         >
//   //           <p className='lg:text-sm xl:text-lg text-center' >{card.name}</p>
//   //           {card.caution && <img className="h-4" src={caution} alt="Caution" />}
//   //           <p>{card.percent}</p>
//   //         </div>
//   //       ))}
//   //       {/* <img className="h-1" src={downChevron} alt="" /> */}
//   //     </div>
//   //   ))}
//   // </div>
// <div>
// {eventData.eventsCategory && eventData.eventsCategory[0]['Clothing and Accessories_Formal Shirt_W']}
      
// </div>
//   );
// };

// export default Cards;
import React, { useEffect, useState } from 'react';
import caution from '../../assets/icons/warning_.svg';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Cards = () => {
  const navigate = useNavigate();
  const [eventData, setEventData] = useState({});

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/data");
      setEventData(response.data); // Update the state with the API response data
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCategoryClick = () => {
    navigate('/clothing/menswear');
  };

  return (
    <div>
      {eventData.eventsCategory && eventData.eventsCategory[0]['Clothing and Accessories_Formal Shirt_W']}
    </div>
  );
};

export default Cards;
