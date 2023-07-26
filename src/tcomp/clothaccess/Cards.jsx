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

  // Function to process the data and split strings
  const processData = (responseData) => {
    const eventsCategoryData = responseData.eventsCategory.map((item) => {
      const categoryKey = Object.keys(item)[0];
      const [category, variant, gender] = categoryKey.split("_");
      const eventCount = item[categoryKey];
      const pimKey = `Clothing and Accessories_${variant}_${gender === 'W' ? 'M' : 'W'}`;
      const pimCount = responseData.pimCategory.find(
        (pimItem) => Object.keys(pimItem)[0] === pimKey
      );
      const pimCountValue = pimCount ? pimCount[pimKey] : 0;
      const percentage =
        pimCountValue !== 0 ? ((eventCount / pimCountValue) * 100).toFixed(0) : 0;

      return { category, variant, gender, eventCount, pimCountValue, percentage };
    });

    const pimCategoryData = responseData.pimCategory.map((item) => {
      const categoryKey = Object.keys(item)[0];
      const [category, variant, gender] = categoryKey.split("_");
      const pimCount = item[categoryKey];

      return { category, variant, gender, pimCount };
    });

    return { eventsCategory: eventsCategoryData, pimCategory: pimCategoryData };
  };

  return (
    <div className="grid grid-cols-4 gap-4">
      {/* Render event category cards */}
      {data.eventsCategory.map((item, index) => (
        <div key={index} className="bg-blue-500 p-4 text-center text-white hover:bg-white hover:text-blue-500 border-2 border-blue-500 rounded-lg shadow-2xl">
          <h2 className="text-xl font-roboto font-bold">Category: {item.category}</h2>
          <p>Variant: {item.variant}</p>
          <p>Gender: {item.gender}</p>
          <p>Count: {item.eventCount}</p>
          <p>PIM Count: {item.pimCountValue}</p>
          <p>Percentage: {item.percentage}%</p>
        </div>
      ))}

      {/* Render pim category cards */}
      {data.pimCategory.map((item, index) => (
        <div key={index} className="bg-blue-500 text-center shadow-2xl p-4 text-white hover:bg-white hover:text-blue-500 border-2 border-blue-500 rounded-lg">
          <h2 className="text-xl font-roboto font-bold">Category: {item.category}</h2>
          <p>Variant: {item.variant}</p>
          <p>Gender: {item.gender}</p>
          <p>Count: {item.pimCount}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;

