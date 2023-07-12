import React from "react";
import Sidebar from "../components/Sidebar";

const CardComponent = () => {
  // Sample data for the cards
  const categories = [
    {
      title: "Men",
      availability: 80,
      dresses: [
        { name: "Men Dress 1", available: 100 },
        { name: "Men Dress 2", available: 100 },
        { name: "Men Dress 3", available: 100 },
        // Add more dresses for men
      ],
    },
    {
      title: "Women",
      availability: 60,
      dresses: [
        { name: "Women Dress 1", available: 80 },
        { name: "Women Dress 2", available: 100 },
        { name: "Women Dress 3", available: 100 },
        // Add more dresses for women
      ],
    },
    {
      title: "Kids",
      availability: 90,
      dresses: [
        { name: "Kids Dress 1", available: 100 },
        { name: "Kids Dress 2", available: 100 },
        { name: "Kids Dress 3", available: 100 },
        // Add more dresses for kids
      ],
    },
  ];

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        {/* Main Content */}
        <header className="bg-gray-200 p-10 rounded-br-2xl flex items-center justify-between">
          {/* Header */}
          <p className="text-right font-bold">Last Scan- 07-02-2023,05:34 PM</p>
          <img src="person.svg" className="h-10 ml-auto" />
          <p className="font-bold pl-10">John Doe</p>
        </header>
        <div className="flex justify-between items-center p-4">
          {/* Additional content */}
          <div>
            {/* Page history */}
            <h2 className="text-lg font-bold mb-4">Page History</h2>
          </div>
          <div>
            {/* Sorting options */}
            <h2 className="text-lg font-bold mb-4">Sort By</h2>
            <select className="p-2 mb-4">
              <option value="availability">Availability</option>
              <option value="name">Name</option>
            </select>
          </div>
        </div>
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4 overflow-y-auto p-20">
          {/* Card Grid */}
          {categories.map((category) => (
            <div
              key={category.title}
              className="bg-white p-4 rounded-lg shadow-md "
            >
              <h2 className="#075985 text-xl font-bold mb-8">
                {category.title}
              </h2>
              <div>
                {category.dresses.map((dress, index) => (
                  <div
                    key={index}
                    className="bg-blue-100 p-2 rounded-md border-red mb-2"
                  >
                    <p className="text-sm">{dress.name}</p>
                    <p className="text-sm text-right">{dress.available}%</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
