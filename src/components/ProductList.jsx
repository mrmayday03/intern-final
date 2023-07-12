import React, { useRef } from 'react';

const ProductList = () => {
  const products = [
    { id: 1, Brand: 'Levi 1', percentage: 100 },
    { id: 2, Brand: 'Levi 2', percentage: 99 },
    { id: 3, Brand: 'Levi 3', percentage: 97 },
    { id: 4, Brand: 'Levi 4', percentage: 94 },
    { id: 5, Brand: 'Levi 5', percentage: 9.99 },
    { id: 6, Brand: 'Levi 6', percentage: 11.99 },
    { id: 1, Brand: 'Levi 1', percentage: 100 },
    { id: 2, Brand: 'Levi 2', percentage: 99 },
    { id: 3, Brand: 'Levi 3', percentage: 97 },
    { id: 4, Brand: 'Levi 4', percentage: 94 },
    { id: 5, Brand: 'Levi 5', percentage: 9.99 },
    { id: 6, Brand: 'Levi 6', percentage: 11.99 },
    { id: 1, Brand: 'Levi 1', percentage: 100 },
    { id: 2, Brand: 'Levi 2', percentage: 99 },
    { id: 3, Brand: 'Levi 3', percentage: 97 },
    { id: 4, Brand: 'Levi 4', percentage: 94 },
    { id: 5, Brand: 'Levi 5', percentage: 9.99 },
    { id: 6, Brand: 'Levi 6', percentage: 11.99 },
  ];

  const listRef = useRef(null);

  const scrollDown = () => {
    if (listRef.current) {
      listRef.current.scrollBy({ top: listRef.current.offsetHeight, behavior: 'smooth' });
    }
  };

  return (
    <div className="max-h-90 overflow-y-auto">
      <h2 className="font-bold ml-10">Product List</h2>
      <div className="flex flex-col space-y-4 p-4" ref={listRef}>
        {products.map((product, index) => (
          <button
            key={product.id}
            className="bg-blue-100 border-2 border-blue-500 px-4 py-8 rounded-xl text-blue-500 font-bold"
            style={{ display: index < 5 ? 'block' : 'none' }}
          >
            <h3>{product.Brand}</h3>
            <p>{product.percentage}</p>
          </button>
        ))}
      </div>
      {products.length > 5 && (
        <div className="flex justify-center mb-4">
          <button className="text-blue-500" onClick={scrollDown}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 animate-bounce"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductList;
