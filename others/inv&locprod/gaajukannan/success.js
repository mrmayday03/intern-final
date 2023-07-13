import React from "react";
import "../components/success.css";


function Success({setOpenSuccess}) {
    return (
      <div className="SuBackground">
        <div className="SuContainer">
            <div>
                <button className="close" onClick={() => {
                        setOpenSuccess(false);
                    }}>
                        <i class='bx bx-x'></i>
                </button>
                <div className="tick">
                <i class='bx bx-check' ></i>
                </div>
                <div className="cont">
                    <p>Inventory notification sent to</p>
                    <p>the <r>Store manager</r></p>
                </div>
            </div>
        </div>
      </div> 
    );
  }
  
  export default Success;