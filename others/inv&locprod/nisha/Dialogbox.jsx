import React, { useState, useEffect } from "react";
import Button from "./Button";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import "../styles.css";

export default function DialogBox() {
  const [cancel, setcancel] = useState(true);
  const [icon, seticon] = useState("");
  const [confirm, setconfirm] = useState({
    para: "Are you sure you want to assign action to Put back to Assigned to John Doe 1?",
    state: false,
    justifyContent: "space-between",
    boxShadow: "2rem 20rem 100rem 100rem rgba(0,0,0,0.5)"
  });

  const dialogcontainerStyle = {
    margin: "0px auto",
    width: "25rem",
    height: "13rem",
    backgroundColor: "white",
    borderRadius: "20px",
    boxShadow: `${confirm.boxShadow}`,
    border: "2px solid"
  };

  const titleStyle = {
    margin: 20
  };

  const dialogupperitems = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  };

  const iconStyleGreen = {
    display: "flex",
    position: "relative",
    top: "20px",
    right: "150px",
    fontSize: "7rem",
    color: "rgba(0,255,0,0.5)",
    justifyContent: "space-between",
    alignItems: "center"
  };

  const dialogloweritems = {
    margin: "3rem 10px"
  };

  const buttoncontainer = {
    display: "flex",
    justifyContent: `${confirm.justifyContent}`,
    alignItems: "center",
    padding: "20px",
  };

  const parastyle = {
    position: "relative",
    top: "1px",
    right: "4rem",
    bottom: "4rem",
    left: "1rem",
    fontWeight: 600
  };

  function buttonhandler() {
    setconfirm((prevdata) => ({
      ...prevdata,
      state: true,
      para: "Action to put back item Levi's jeans, model- 501L Assigned to John Dow 1 successful",
      justifyContent: "flex-end",
      boxShadow: "2rem 20rem 100rem 100rem grey"
    }));
    seticon("confirmed");
  }

  function canclebuttonhandler() {
    setcancel(false);
  }

  const [bounce, setbounce] = useState();

  useEffect(() => {
    setTimeout(() => {
      setbounce("");
    }, 1000);
    return () => setbounce("bounce");
  }, [confirm.state]);

  return (
    <div>
      {cancel ? (
        <div
          className={`dialogcontainer ${bounce}`}
          style={dialogcontainerStyle}
        >
          <div className="dialogItems">
            <div style={dialogupperitems}>
              <h1 className="title" style={titleStyle}>
                {confirm.title}
              </h1>
              <div className="iconcontainer">
                {icon === "confirmed" ? (
                  <CheckCircleOutlineIcon style={iconStyleGreen}
                   alignItems="center" />
                ) : null}
              </div>
            </div>
            <div style={dialogloweritems}>
              <p className="para" style={parastyle}>
                {confirm.para}
              </p>
              <div style={buttoncontainer}>
                {!confirm.state ? (
                  <Button
                    title="No, go Back"
                    buttonhandler={canclebuttonhandler}
                    className="cancel"
                    bgcolor= "lightblue"
                    color="#3251CD"
                  />
                ) : null}
                {confirm.state ? (
                  <p
                    
                    bgcolor="white"
                    
                  p/>
                ) : ( 
                  <Button
                    title="Confirm"
                    buttonhandler={buttonhandler}
                    bgcolor="lightblue"
                    color="#3251CD"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Button title="click"/>
      )}
    </div>
  );
}