import React from 'react'
import icon from '../../assets/register/bulblogin.png'
import RegisterNav from './RegisterNav'
import './AbstractPage.css'
import { useNavigate } from 'react-router-dom';


const AbstractPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/login');
  };
  return (
    <>  
        <RegisterNav/>

    <div className='body scrollbar-hide'>
      <div className="container">
        <div className="img-container">
          <img src={icon} alt="" className='img' />
        </div>
        <div className="content">
          <p>Welcome to Innovation Center ! Login to continue</p>
        </div>
        <div className="btns">
        <button className="btn" onClick={handleClick}>
          Store Supervisor
        </button>
              <button className="btn">Store Manager</button>
          <button className="btn">Store Assosciate</button>
          

        </div>
      </div>
     

        
    </div>
    
    </>
    
  )
}

export default AbstractPage
