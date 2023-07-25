import React, { useEffect, useState } from 'react';
import axios from 'axios';
import caution from '../../assets/icons/warning_.svg';
import { useNavigate } from 'react-router-dom';

const categoryData = [
  {
    category: "Men's category",
    cards: [
      { name: "Jeans", percent: null, caution: true },
      { name: "Formal Shirt", percent: null, caution: false },
      { name: "Tshirt", percent: null, caution: false },
    ],
  },
  {
    category: "Women's category",
    cards: [
      { name: "Jeans", percent: null, caution: true },
      { name: "Formal Shirt", percent: null, caution: false },
      { name: "Tshirt", percent: null, caution: false },
    ],
  },
  {
    category: "Kid's category",
    cards: [
      { name: "Jeans", percent: null, caution: true },
      { name: "Formal Shirt", percent: null, caution: false },
      { name: "Tshirt", percent: null, caution: false },
    ],
  },
];

const Cards = () => {
  const navigate = useNavigate();
  const [eventsCategory, setEventsCategory] = useState([]);
  const [pimCategory, setPimCategory] = useState([]);

  useEffect(() => {
    axios
      .get("https://rfidhttpfunc.azurewebsites.net/api/getjoindata")
      .then((response) => {
        const eventsData = response.data.eventsCategory;
        const pimData = response.data.pimCategory;

        const eventsCombined = eventsData.reduce((acc, obj) => ({ ...acc, ...obj }), {});
        const pimCombined = pimData.reduce((acc, obj) => ({ ...acc, ...obj }), {});

        setEventsCategory(eventsCombined);
        setPimCategory(pimCombined);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const getCategoryKey = (cardName, genderIndicator) => {
    return `Clothing and Accessories_${cardName.replace(" ", "_")}_${genderIndicator}`;
  };

  const getEventsCount = (categoryKey) => {
    return eventsCategory[categoryKey] || 0;
  };

  const getPimCount = (categoryKey) => {
    return pimCategory[categoryKey] || 0;
  };

  const calculatePercentage = (card, genderIndicator) => {
    const categoryKey = getCategoryKey(card.name, genderIndicator);

    const eventsCount = getEventsCount(categoryKey);
    const pimCount = getPimCount(categoryKey);

    if (eventsCount > 0 && pimCount > 0) {
      const percentage = ((eventsCount / pimCount) * 100).toFixed(2);
      return `${percentage}%`;
    } else {
      return null;
    }
  };

  const handleCategoryClick = () => {
    navigate("/clothing/menswear");
  };

  return (
    <div className="bg-blue-100 rounded-lg p-4 relative flex justify-around top-[3vh] h-[50vh] lg:w-[70vw]  lg:h-[] ">
      {categoryData.map((category, index) => (
        <div
          className="bg-white rounded-2xl p-4 flex flex-col justify-around h-[65vh]  xl:ml-[10vh] lg:h-[65vh] lg:ml-10 items-center lg:w-[20vw] "
          key={index}
          role="button"
        >
          <p className="text-blue-800 font-semibold mb-4 lg:mb-1">{category.category}</p>
          {category.cards.map((card, cardIndex) => (
            <div
              className={`${
                cardIndex === 0 ? 'border-red-500 text-red-600 bg-red-100' : 'border-blue-500'
              } xl:p-[3rem] border-2 border-solid rounded-2xl bg-${
                cardIndex === 0 ? 'red' : 'blue'
              }-200 flex justify-around m-2 lg:m-1 h-1 items-center text-${
                cardIndex === 0 ? 'red ' : 'blue'
              }-500 px-4 py-10 lg:py-7 lg:px-2 lg:w-[13rem] `}
              key={cardIndex}
              onClick={handleCategoryClick}
            >
              <p className='lg:text-sm xl:text-lg text-center'>{card.name}</p>
              {card.caution && <img className="h-4" src={caution} alt="Caution" />}
              <p>
                {card.percent !== null ? card.percent : calculatePercentage(card, category.category)}
              </p>
            </div>
          ))}
          {/* <img className="h-1" src={downChevron} alt="" /> */}
        </div>
      ))}
    </div>
  );
};

export default Cards;
