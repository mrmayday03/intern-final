import React from 'react';
import cal from '../../assets/icons/cal.svg';
import clock from '../../assets/icons/clock.svg';
import refresh from '../../assets/icons/refresh.svg';
import './Scan.css';

const Scan = () => {
  return (
    <div className="scan">
      <p className="scan-title">Scan report</p>
      <p className="last-scan">Last Scan:</p>
      <div className="time-stamp">
        <div className="date">
          <img src={cal} alt="" />
          <p className="ques">Date</p>
          <p className="ans">07-09-2023</p>
        </div>
        <div className="time">
          <img src={clock} alt="" />
          <p className="ques">Time</p>
          <p className="ans">05:34 PM</p>
        </div>
        <div className="status">
          <p className="ques">Scanner Status:</p>
          <p className="ans yes">Inactive</p>
        </div>
        <div className="ref-btn">
          <button>Refresh</button>
          <img src={refresh} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Scan;
