/* eslint-disable react/prop-types */
import { useState } from "react";

function Brand({ name, st }) {
  const handleClick = (event) => {
    setIsActive((current) => !current);
  };

  const [isActive, setIsActive] = useState(false);

  return (
    <button
      className={`Brand ${isActive ? "chosen" : ""} rounded bg-blue-100 border hover:bg-blue-500 hover:text-white p-4`}
      id={name}
      onClick={handleClick}
    >
      {name}
    </button>
  );
}

function Percent({ val, st }) {
  return (
    <button
      className={`Percent ${st ? "" : "danger"} rounded hover:bg-blue-500 hover:text-white p-4`}
    >
      {val}%
    </button>
  );
}

function Item({ l, Products, Values }) {
  const n = Products[l];
  const v = Values[l];
  const s = v < 100 ? false : true;

  return (
    <div className="Item mx-10 flex justify-between items-center">
      <Brand name={n} st={s} />
      <Percent val={v} st={s} />
    </div>
  );
}

export default function ProductList() {
  const products = ["Levi's", "Wrangler", "Pepe", "M&S", "Lee", "ABC"];
  const values = [97, 97, 100, 100, 100, 100];

  const numbers = [0, 1, 2, 3, 4, 5];
  const updatedList = numbers.map((number) => {
    return (
      <Item key={number} l={number} Products={products} Values={values} />
    );
  });

  return (
    <div className=" bg-white text-center rounded-lg text-gray-600">
      <ul className="py-0 overflow-y-scroll overflow-x-hidden scrollbar-hide h-auto">
        {updatedList}
      </ul>
    </div>
  );
}
