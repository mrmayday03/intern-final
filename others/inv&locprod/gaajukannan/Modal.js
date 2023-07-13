import React, { useState } from "react";
import Comp from "../components/comp";
import "./Modal.css";

// eslint-disable-next-line react/prop-types
function Modal({setOpenModal}){
  const [compOpen , setCompOpen] = useState(false);
    return(
      <div className="modalbackground">
          <div className="modalContainer">
            <div>
              <button className="cross"
              onClick={() => {
                setOpenModal(false);
              }}
              >
                <i className='bx bx-x'></i>
              </button>
            </div>
                <h2 className="head">Take Action-List of employees</h2>
                <div className="com">
                  <div className="grid">
                    <div className="col">Name</div>
                    <div className="col">Task</div>
                    <div className="col">No.of tickets</div>
                  </div>
                  <div className="grid2">
                    <div className="col">Joe Doe2</div>
                    <div className="col"><button className="but"
                      onClick={() => {
                        setCompOpen(true);
                      }}>
                      Assign<i className='bx bxs-chevron-down'></i> </button></div>
                    <div className="col">00</div>
                  </div>
                  <div className="grid3">
                    <div className="col">Joe Doe1</div>
                    <div className="col"><button className="but">Restock</button></div>
                    <div className="col">01</div>
                  </div>
                  <div className="grid4">
                    <div className="col">Joe Doe3</div>
                    <div className="col"><button className="but"
                    onClick={() => {
                        setCompOpen(true);
                      }}>Assign<i className='bx bxs-chevron-down'></i> </button></div>
                    <div className="col">00</div>
                  </div>
                  <div className="grid5">
                    <div className="col">Joe Doe4</div>
                    <div className="col"><button className="but">Restock</button></div>
                    <div className="col">01</div>
                  </div>
                  <div className="grid6">
                    <div className="col">Joe Doe5</div>
                    <div className="col"><button className="but"
                    onClick={() => {
                        setCompOpen(true);
                      }}>Assign<i className='bx bxs-chevron-down'></i> </button></div>
                    <div className="col">00</div>
                  </div>
                </div>

          </div> 
            {compOpen && <Comp setOpenComp={setCompOpen} />}
      </div>
    );
}

export default Modal;