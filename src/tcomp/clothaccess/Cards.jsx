import React from 'react'
import caution from '../../assets/icons/warning_.svg';
import './Cards.css'
import downChevron from '../../assets/icons/scroll arrow.svg';



const Cards = () => {
  return (
    <>
      <div className="cards-container">
              <div className="card-container">
                <p id="category-name">
                  Men’s category
                </p>
                <div className="card-r">
                  <p>Jeans & Pants</p>
                  <img className="card-image" src={caution} alt="" />
                  <p>70%</p>

                </div>
                <div className="card-g">
                  <p>Formal T-shirt</p>
                  <p>79%</p>

                </div>
                <div className="card-g">
                  <p>Casual T-shirt</p>
                  <p>79%</p>

                </div>
                <div className="card-g">
                  <p>Casual T-shirt</p>
                  <p>79%</p>

                </div>
                <div className="card-g">
                  <p>Casual T-shirt</p>
                  <p>79%</p>

                </div>
                <img className='downChevron'src={downChevron} alt="" />

              </div>
              <div className="card-container">
              <p id="category-name">
                Women’s category
                </p>
                <div className="card-r">
                  <p>Jeans & Pants</p>
                  <img className="card-image" src={caution} alt="" />
                  <p>70%</p>

                </div>
                <div className="card-g">
                  <p>Formal T-shirt</p>
                  <p>79%</p>

                </div>
                <div className="card-g">
                  <p>Casual T-shirt</p>
                  <p>79%</p>

                </div>
                <div className="card-g">
                  <p>Casual T-shirt</p>
                  <p>79%</p>

                </div>
                <div className="card-g">
                  <p>Casual T-shirt</p>
                  <p>79%</p>

                </div>
                <img className='downChevron'src={downChevron} alt="" />
              </div>
              <div className="card-container">
              <p id="category-name">
                Kid’s catagory
                </p>
                <div className="card-r">
                  <p>Jeans & Pants</p>
                  <img className="card-image" src={caution} alt="" />
                  <p>70%</p>

                </div>
                <div className="card-g">
                  <p>Formal T-shirt</p>
                  <p>79%</p>

                </div>
                <div className="card-g">
                  <p>Casual T-shirt</p>
                  <p>79%</p>

                </div>
                <div className="card-g">
                  <p>Casual T-shirt</p>
                  <p>79%</p>

                </div>
                <div className="card-g">
                  <p>Casual T-shirt</p>
                  <p>79%</p>

                </div>
                <img className='downChevron'src={downChevron} alt="" />
              </div>
             

          
      </div>

    
    </>
  )
}

export default Cards