import React from "react";

const Header = () => {
  return (
    <div className="header">
        <header className="bg-gray-200 p-10 rounded-br-2xl flex-1 flex flex-col items-center justify-between"> {/* Header */}
            <p className='text-right font-bold'>Last Scan- 07-02-2023,05:34 PM</p>
            <img src="person.svg" className='h-10 ml-auto' />
            <p className='font-bold pl-10'>John Doe</p>
        </header>
    </div>
  );
};

export default Header;
