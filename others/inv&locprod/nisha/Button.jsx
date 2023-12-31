import React from "react";
import "../styles.css";

export default function Button(props) {
  const ButtonStyle = {
    width: "90px",
    height: "40px",
    background: props.bgcolor,
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
    color: props.color,
    boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.1)",
    border: "0.5px solid rgba(0,0,0,0.9)"
  };

  return (
    <div>
      <button style={ButtonStyle} onClick={props.buttonhandler}>
        <span>{props.title}</span>
      </button>
    </div>
  );
}