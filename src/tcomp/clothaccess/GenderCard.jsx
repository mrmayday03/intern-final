/* eslint-disable react/prop-types */
import React from 'react';

const GenderCard = ({ gender, data }) => {
  return (
    <div className="p-4 border border-gray-300 rounded shadow-md mb-4">
      <h2 className="text-lg font-semibold mb-2">{gender === 'M' ? 'Men' : 'Women'}</h2>
      <div>
        {data.map((item) => (
          <div key={item.subcategory} className="flex items-center justify-between py-2">
            <span>{item.subcategory}</span>
            <span>{item.percentage}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenderCard;