import React, { useState } from "react";
import Modal from "./components/Modal";
import "./style.css";

function App() {
  const [modalOpen,setModalOpen]=useState(false);
  return (
    <div className="App">
      <button className="button" onClick={() =>{
      setModalOpen(true);
      }}
      >
        Assign
      </button>

      {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </div>
  );
}

export default App;
