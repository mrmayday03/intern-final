import React from 'react';
import TerminalBtn from './TerminalBtn.jsx';

function TerminalControl() {
  return (
    <div className="terminal-control">
      <div className="terminal-title">
        <h1>AGV CONFIGURATION</h1>
      </div>
      <div className='term-btn'>
        <TerminalBtn className='term-btns' name="System Booting" index={1} command="node -v" />
        <TerminalBtn name="Lidar Booting" index={2} command="ls" />
        <TerminalBtn name="Operation Booting" index={3} command="echo Hello" />
        <TerminalBtn name="AGV Started" index={4} command="bash start1.sh" />
      </div>
    </div>
  );
}

export default TerminalControl;
