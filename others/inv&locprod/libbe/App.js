import React, { useState } from "react";
import "./style.css";
import  Modal  from "./Modal";

export default function App() {
  const [ModalOpen, setModalOpen] = useState(false);
  
  return (

    <div className="App">
      <h1>Notify manager</h1>
      <button onClick={()=>{setModalOpen(true)}}>Notify manager</button>
      {ModalOpen && <Modal setOpenModal={setModalOpen} /> }
    </div>
  );
  
}
