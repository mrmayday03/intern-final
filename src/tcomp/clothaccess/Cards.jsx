import React from 'react';
import caution from '../../assets/icons/warning_.svg';
import downChevron from '../../assets/icons/scroll arrow.svg';
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
    <div className="bg-blue-100 rounded-lg p-4 relative flex justify-around top-[12vh] h-[50vh]">
    {categoryData.map((category, index) => (
      <div
        className="bg-white rounded-2xl p-4 flex flex-col justify-around h-[50vh] mx-[1rem] w-80"
        key={index}
        role="button"
      >
        <p className="text-blue-800 font-semibold mb-1">{category.category}</p>
        {category.cards.map((card, cardIndex) => (
          <div
            className={`${
              cardIndex === 0 ? 'border-red-500' : 'border-blue-500'
            } border-2 border-solid rounded-2xl bg-${
              cardIndex === 0 ? 'red' : 'blue'
            }-200 flex justify-around m-2 h-10 items-center text-${
              cardIndex === 0 ? 'red' : 'blue'
            }-500 px-7`}
            key={cardIndex}
            onClick={handleCategoryClick}

          >
            <p>{card.name}</p>
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
