// ClothAccess.jsx
import React, { useEffect, useState } from 'react';
import DashBoardNav from '../dashbaordNav/DashBoardNav';
import './ClothAccess.css';
import './Cards.css';
import backbtn from '../../assets/icons/back button.svg';
import filter from '../../assets/icons/filter icon.svg';
import downChevron from '../../assets/icons/scroll arrow.svg';
import Cards from './Cards';
import Sidebar from '../../components/Sidebar';

const ClothAccess = () => {
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const scrolledUp = prevScrollPos > currentScrollPos;

      setShowNav(scrolledUp);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <DashBoardNav />
      <div className="parent">
        <Sidebar />
        <div className={`cloth-access-container ${showNav ? '' : 'hide-nav'}`}>
          <div className="cloth-access-content">
            <div className="cloth-access-left-header">
              <img src={backbtn} alt="" />
              <p className="p">Clothing & Accessories</p>
            </div>
            <div className="cloth-access-right-content">
              <div className="cloth-access-right-content-first-part">
                <img src={filter} alt="" />
                <p className="p">Sort by</p>
              </div>
              <div className="cloth-access-right-content-sec-part">
                <p className="p">Non-compliance Score</p>
                <img src={downChevron} alt="" />
              </div>
            </div>
          </div>
          <Cards />
        </div>
      </div>
    </>
  );
};

export default ClothAccess;
