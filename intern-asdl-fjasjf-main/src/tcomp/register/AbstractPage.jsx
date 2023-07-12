import React from 'react'
import icon from '../../assets/register/bulblogin.png'
import RegisterNav from './RegisterNav'
import './AbstractPage.css'

const AbstractPage = () => {
  return (
    <>  
        <RegisterNav/>

    <div className='body'>
      <div className="container">
        <div className="img-container">
          <img src={icon} alt="" className='img' />
        </div>
        <div className="content">
          <p>Welcome to Innovation Center ! Login to continue</p>
        </div>
        <div className="btns">
          <button className="btn">Store Supervision</button>
          <button className="btn">Store Manager</button>
          <button className="btn">Store Assosciate</button>
          

        </div>
      </div>
     

        
    </div>
    
    </>
    
  )
}

export default AbstractPage