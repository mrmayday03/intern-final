import React from "react";
import Header from "./header";

const CircleImage = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center h-screen bg-color-lightblue">
        <div className="flex flex-col items-center">
          <div className="flex justify-center items-center bg-white rounded-full w-40 h-40 shadow-lg mb-6">
            <div className="bg-blue-100 rounded-full w-36 h-36 flex justify-center items-center">
              <img src="person.svg" className="w-24 h-24" />
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-10 w-80">
            <h2 className="text-lg font-bold mb-4">
              Login as a Store Supervisor
            </h2>
            <div className="flex flex-col items-center">
              <input
                type="text"
                placeholder="Enter your Employee ID"
                className="border border-blue-300 rounded-lg p-2 mb-2 w-full"
              />
              <input
                type="password"
                placeholder="Password"
                className="border border-blue-300 rounded-lg p-2 mb-4 w-full"
              />
              <button className="border border-blue-500 bg-blue-100 text-blue-500 hover:bg-sky-500   font-bold rounded-lg py-2 px-10 mb-2 w-50">
                Login
              </button>
              <a href="#" className="text-blue-500 font-bold text-sm">
                Need help?
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CircleImage;
