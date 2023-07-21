/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";

function Brand({ name, st }) {
  const handleClick = (event) => {
    setIsActive((current) => !current);
  };

  const [isActive, setIsActive] = useState(false);

  return (
    <button
      className={`Brand ${isActive ? "chosen" : ""} flex justify-center rounded-xl  bg-blue-100 xl:border-3  xl:ml-6 xl:w-15 xl:h-20  border-blue-500 hover:bg-blue-500 hover:text-white xl:p-4  xl:text-xl lg:h-13 lg:p-2 lg:w-28 lg:rounded-lg lg:border-2 lg:-ml-9`}
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
      className={`Percent ${st ? "" : "danger"} flex justify-center rounded-xl bg-blue-100 border-2 border-blue-500 hover:bg-blue-500 hover:text-white  lg:rounded-lg lg:h-12 lg:my-3 lg:w-13 lg:ml-4 lg:p-1 xl:h-18  `}
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
<<<<<<< HEAD
    <div className="mx-10 flex justify-center items-center xl:h-20 xl:my-8 xl:w-15 xl:m-4 ">
=======
    <div className="mx-10 flex justify-between items-center xl:h-30  xl:my-8 xl:w-15 xl:m-4 ">
>>>>>>> 879ae7df00fa2f0c52f2cd37391ba3653aa67aed
      <Brand name={n} st={s} />
      <Percent val={v} st={s} />
    </div>
  );
}

export default function ProductList() {
  const products = ["Levi's", "Wrangler", "Pepe", "M&S", "Lee", "ABC", "XYZ"];
  const values = [97, 97, 100, 100, 100, 100, 100];

  const numbers = [0, 1, 2, 3, 4, 5, 6];
  const updatedList = numbers.map((number) => {
    return (
      <Item key={number} l={number} Products={products} Values={values} />
    );
  });

  return (
    <div className=" bg-white text-center text-xl font-semibold  text-gray-600 ">
      <ul className="overflow-y-scroll overflow-x-hidden scrollbar-hide h-92  ">
        {updatedList}
      </ul>
    </div>
  );
}
