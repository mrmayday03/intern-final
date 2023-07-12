import React from 'react';
import DashBoardNav from '../dashbaordNav/DashBoardNav';

import storeIcon from '../../assets/icons/list.svg';
import productIcon from '../../assets/icons/pie five_.svg';
import helpIcon from '../../assets/icons/help icon.svg';
import emailIcon from '../../assets/icons/mail.svg';
import logoutIcon from '../../assets/icons/logout.svg';

import './SideBar.css';

const SideBar = () => {
  return (
    <>
      <DashBoardNav />
      <div className="sidebar">
        <div className="sidebar-logo">
          <p>Logo</p>
        </div>
        <div className="content1">
          <div className="icons">
            <img src={storeIcon} className="icon" alt="" />
          </div>
          <p>Store Shelf Compliance</p>
        </div>
      </div>
    </>
  );
};

export default SideBar;
