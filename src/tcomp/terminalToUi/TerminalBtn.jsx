import React, { useState } from 'react';
import './TerminalBtn.css';

const TerminalBtn = ({ name, command, index }) => {
  const [isSuccess, setIsSuccess] = useState(null); // Track the success status
  const [output, setOutput] = useState('');

  const handleClick = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/execute-script', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          command,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.message);

        setOutput(data.output); // Set the command output
        setIsSuccess(true); // Set success status to true
      } else {
        console.error('Error executing script');
        setIsSuccess(false); // Set success status to false
      }
    } catch (error) {
      console.error('An error occurred:', error);
      setIsSuccess(false); // Set success status to false
    }
  };

  return (
    <div className="terminal-btn">
      <div className="terminal-content">
        <span className="serial-number">Step {index}:</span> {/* Display the serial number */}
        <button
          onClick={handleClick}
          className={`btn ${isSuccess ? 'success' : isSuccess === false ? 'error' : ''}`}
        >
          {name}
        </button>
        {isSuccess !== null && (
          <span className={`status-icon ${isSuccess ? 'success-icon' : 'error-icon'}`}></span>
        )}
      </div>
      {output && <p>{output}</p>}
    </div>
  );
};

export default TerminalBtn;
