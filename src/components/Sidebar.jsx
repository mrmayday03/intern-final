import React, { useState } from "react";

const Sidebar = () => {
  const sidebarItems = [
    {
      title: "Compliance",
      image: "icon _list_.svg",
    },
    {
      title: "Traction Analysis",
      image: "_pie five_.svg",
    },
    {
      title: "Check Email",
      image: "icon mail.svg",
    },
    {
      title: "Help & Support",
      image: "help icon.svg",
    },
    {
      title: "Logout",
      image: "icon logout.svg",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="w-1/5 bg-blue-700 xl:p-10 lg:p-8 rounded-r-3xl flex flex-col">
      <div className="mt-3 mb-10 flex items-center">
        <p className="font-bold text-white text-center w-full mb-8 text-lg">LOGO HERE</p>
      </div>
      {sidebarItems.map((item, index) => (
        <div
          key={index}
          className={`flex items-left xl:py-10 lg:py-5 w-auto ${
            activeIndex === index ? "bg-white w-8 text-blue-700" : ""
          } rounded-2xl p-10`}
          onClick={() => handleItemClick(index)}
          role="button"
        >
          <img src={`/${item.image}`} alt={item.title} className={`w-6 xl:h-6 xl:mr-2 lg:mr-2 hover:text-blue-700 ${
            activeIndex === index ? "filter sepia-100 hue-rotate-190 saturate-500" : ""
          }`} />
          <span
            className={`${
              activeIndex === index ? "text-blue-500" : "text-white"
            } text-base font-bold`}
          >
            {item.title}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
