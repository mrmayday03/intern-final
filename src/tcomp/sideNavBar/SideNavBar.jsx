import React from 'react';
import './SideNavBar.css';
import DashBoardNav from '../dashbaordNav/DashBoardNav';

import storeIcon from '../../assets/icons/list.svg';
import productIcon from '../../assets/icons/pie five_.svg';
import helpIcon from '../../assets/icons/help icon.svg';
import emailIcon from '../../assets/icons/mail.svg';
import logoutIcon from '../../assets/icons/logout.svg';

const SideNavbar = () => {
  return (
    <>
      <DashBoardNav />

      <div className="side-navbar" id="side-navbar">
        <p>Logo</p>
        <div id="container">
          <img src={storeIcon}  alt="Store" className="icon" />
      
        
       
        
          <button className="nav-button">
            
            Store Shelf Compliance
          </button>
        

        </div>
        
        <button className="nav-button">
          <img src={productIcon} alt="Product" className="nav-icon" />
          Product Traction Analysis
        </button>
        <button className="nav-button">
          <img src={helpIcon} alt="Help" className="nav-icon" />
          Help and Support
        </button>
        <button className="nav-button">
          <img src={emailIcon} alt="Email" className="nav-icon" />
          Check Email
        </button>
        <button className="nav-button">
          <img src={logoutIcon} alt="Logout" className="nav-icon" />
          Logout
        </button>
      </div>
    </>
  );
};

export default SideNavbar;
