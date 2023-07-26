import React from 'react';
import caution from '../../assets/icons/warning_.svg';
import { useNavigate } from 'react-router-dom';

const categoryData = [
  {
    category: "Men's category",
    cards: [
      { name: "Jeans & Pants", percent: "70%", caution: true },
      { name: "Formal T-shirt", percent: "79%", caution: false },
      { name: "Casual T-shirt", percent: "79%", caution: false },
      { name: "Casual T-shirt", percent: "79%", caution: false },
      { name: "Casual T-shirt", percent: "79%", caution: false },
    ],
  },
  {
    category: "Women's category",
    cards: [
      { name: "Jeans & Pants", percent: "70%", caution: true },
      { name: "Formal T-shirt", percent: "79%", caution: false },
      { name: "Casual T-shirt", percent: "79%", caution: false },
      { name: "Casual T-shirt", percent: "79%", caution: false },
      { name: "Casual T-shirt", percent: "79%", caution: false },
    ],
  },
  {
    category: "Kid's category",
    cards: [
      { name: "Jeans & Pants", percent: "70%", caution: true },
      { name: "Formal T-shirt", percent: "79%", caution: false },
      { name: "Casual T-shirt", percent: "79%", caution: false },
      { name: "Casual T-shirt", percent: "79%", caution: false },
      { name: "Casual T-shirt", percent: "79%", caution: false },
    ],
  },
];

const Cards = () => {
  const navigate = useNavigate();

  const handleCategoryClick = () => {
    navigate('/clothing/menswear');
  };
  return (
    <div className="bg-blue-100 rounded-lg p-4 relative flex justify-around top-[3vh] h-[50vh] lg:w-[70vw]  lg:h-[] ">
    {categoryData.map((category, index) => (
      <div
        className="bg-white rounded-2xl p-4 flex flex-col justify-around h-[65vh]  xl:mx-[1rem] w-80 lg:h-[65vh] lg:ml-10  lg:w-[20vw] "
        key={index}
        role="button"
      >
        <p className="text-blue-800 font-semibold mb-4 lg:mb-1">{category.category}</p>
        {category.cards.map((card, cardIndex) => (
          <div
            className={`${
              cardIndex === 0 ? 'border-red-500 text-red-600 bg-red-100' : 'border-blue-500'
            } border-2 border-solid rounded-2xl bg-${
              cardIndex === 0 ? 'red' : 'blue'
            }-200 flex justify-around m-2 lg:m-1 h-1 items-center text-${
              cardIndex === 0 ? 'red ' : 'blue'
            }-500 px-4 py-10 lg:py-7 lg:px-2 lg:w-[13rem] `}
            key={cardIndex}
            onClick={handleCategoryClick}

          >
            <p className='lg:text-sm xl:text-lg' >{card.name}</p>
            {card.caution && <img className="h-4" src={caution} alt="Caution" />}
            <p>{card.percent}</p>
          </div>
        ))}
        {/* <img className="h-1" src={downChevron} alt="" /> */}
      </div>
    ))}
  </div>
  );
};

export default Cards;
