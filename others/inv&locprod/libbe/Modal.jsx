import React, {  useState } from "react";
import "./style.css"
import Success from "./success";

function  Modal ({ setOpenModal }){
  const [SuccessOpen,setSuccessOpen] = useState(false);
  return(
  <div className="container">
      <div className="modal">
        <h2 className="toptext">
          Inventory notification
          
            <div className="bigtext">
              <p>Stock for Levi's #501 is low in the inventory according to Last scan rec- 07-02-2023, Time: 05:36 PM <br />Recommended action to re-order stock
            </p></div>
          
        </h2>

        <p className="notification">
          Notification will be sent to:{" "}
          <div className="mana">
            Manager <i className="arrow down"></i>
          </div>
        </p>
        
        <div className="send">
       

        <button  className="sendb"  onClick={() => setSuccessOpen(true)}>
          
        <svg
          className="icon"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-send"
          viewBox="0 0 16 16"
        >
          <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
        </svg>send</button></div>
        <div className="close" >
          <button id="closex" onClick={() => setOpenModal(false)} >X</button>
        </div>
        </div>
        {SuccessOpen && <Success setOpenSuccess={setSuccessOpen} /> }
      </div>
     
      
    
    
  );

}

export default Modal;