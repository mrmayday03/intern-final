import React, { useState } from "react";
import Success from "../components/success";
import "../components/Comp.css";


function Comp({ setOpenComp }) {
  const [SuccessOpen , setSuccessOpen] = useState(false);
    return (
      <div className="Background">
        <div className="Container">
           <div className="back">
              <button className="back1" onClick={() => {
                setOpenComp(false);
              }}>
                <i class='bx bx-left-arrow-alt'></i>
              </button>
            </div>
            <div className="content">
              <p>Are you sure you want to assign action to</p>
              <p>Put back to Assigned to <r>Joe Deo 1</r></p>
            </div>
            <div>
              <button className="ba" onClick={() => {
                  setOpenComp(false);
                }}>
                  No,go back
              </button>
              <button className="ba1" onClick={() => {
                  setSuccessOpen(true);
                }}>
                  Continue
              </button>
            </div>
        </div>
        {SuccessOpen && <Success setOpenSuccess={setSuccessOpen} />}
      </div> 
    );
  }
  
  export default Comp;