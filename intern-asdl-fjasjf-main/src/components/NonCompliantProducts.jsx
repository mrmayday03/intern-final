import { React, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync } from "@fortawesome/free-solid-svg-icons";

const NonCompliantProducts = () => {
  // Your shelf data
  const shelves = [
    { id: 1, productsCount: 4 },
    { id: 2, productsCount: 3 },
    { id: 3, productsCount: 2 },
    { id: 4, productsCount: 4 },
    { id: 5, productsCount: 4 },
    { id: 6, productsCount: 3 },
    { id: 7, productsCount: 2 },
    { id: 8, productsCount: 4 },
    { id: 9, productsCount: 4 },
    { id: 10, productsCount: 3 },
    { id: 11, productsCount: 2 },
    { id: 12, productsCount: 4 },
    { id: 13, productsCount: 1 },
    { id: 14, productsCount: 3 },
    { id: 15, productsCount: 2 },
  ];
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    // Simulating a delay for demonstration purposes
    setTimeout(() => {
      setIsRefreshing(false);
      console.log("Refreshing Non-Compliant Products");
    }, 2000);
  };
  return (
    <div>
      <div className="flex justify-end mb-4">
        <button
          className="bg-blue-100 border-2 border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500 font-bold py-2 px-4 rounded-xl flex items-center"
          onClick={handleRefresh}
        >
          {isRefreshing ? (
            <FontAwesomeIcon icon={faSync} className="animate-spin mr-2" />
          ) : (
            <FontAwesomeIcon icon={faSync} className="mr-2" />
          )}
          Refresh
        </button>
      </div>
      <div className="grid grid-cols-5 grid-rows-3 gap-4">
        {shelves.map((shelf) => (
          <button
            key={shelf.id}
            className={`rounded-xl px-3 py-2 mr-3 ${
              shelf.productsCount < 4
                ? "bg-red-100 border-2 hover:bg-red-500 hover:text-white border-red-500 text-red-500 font-bold"
                : "bg-green-100 border-2 hover:bg-green-500 hover:text-white border-green-500 text-green-500 font-bold"
            }`}
          >
            {shelf.productsCount}/4
          </button>
        ))}
      </div>
    </div>
  );
};

export default NonCompliantProducts;
