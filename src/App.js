import './App.css';
import React from 'react';
import BtnPanel from './components/BtnPanel.js';
import Display from './components/Display.js';

function App() {
  return (
    <React.Fragment>
      <div className="calc-ui">
        <Display result={0}/>
        <BtnPanel />
      </div>
    </React.Fragment>
  );
}

export default App;
