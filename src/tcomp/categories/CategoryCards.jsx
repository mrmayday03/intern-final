
import React from 'react';
import './CategoryCards.css';
import './CompScan.css'
import cloth from '../../assets/icons/Cloths and Accessories.svg';
import grocery from '../../assets/icons/Grocery.svg';
import health from '../../assets/icons/Health and beauty.svg';
import Home from '../../assets/icons/Home goods.svg';
import toy from '../../assets/icons/Toys.svg';
import elct from '../../assets/icons/electronic.svg';
import DashBoardNav from '../dashbaordNav/DashBoardNav';
import CompScan from './CompScan';
import Scan from './Scan';
import Sidebar from '../../components/Sidebar';

const CategoryCards = () => {
  return (
    <>
    <DashBoardNav/>
    <Sidebar/>
      <div className="category-cards">
        <div className="card-type ">
          <p className="card-title">Categories</p>

          <div className="column ">
            <div className="category-item r">
              <div className="content r">
                <img src={cloth} className="content-img" alt="cloth" />
                <p className="type">Clothing & Accessories</p>
              </div>
              <span className="percent r">70%</span>
            </div>
            <div className="category-item g"> 
              <div className="content g">
                  <img src={health} className="content-img" alt="cloth" />
                  <p className="type">Health & Beauty</p>
                </div>
                <span className="percent g">76%</span>
            </div>
            <div className="category-item g"> 
              <div className="content g">
                  <img src={toy} className="content-img" alt="cloth" />
                  <p className="type">Toys</p>
                </div>
                <span className="percent g">76%</span>
            </div>
          </div>

          <div className="column">
            <div className="category-item r">
                <div className="content r">
                  <img src={grocery} className="content-img" alt="cloth" />
                  <p className="type">Grocery</p>
                </div>
                <span className="percent r">70%</span>
            </div>       
            <div className="category-item g"> 
              <div className="content g">
                  <img src={Home} className="content-img" alt="cloth" />
                  <p className="type">Electronics</p>
                </div>
                <span className="percent g">70%</span> 
            </div>          
            <div className="category-item g"> 
              <div className="content g">
                  <img src={elct} className="content-img" alt="cloth" />
                  <p className="type">Electronics</p>
                </div>
                <span className="percent g">70%</span> 
            </div>          
          </div>

           <CompScan />
           <Scan />
        </div>
      </div>
    
    </>
  );
};

export default CategoryCards;
