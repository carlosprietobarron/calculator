import './App.css';
import React from 'react';
import ButtonPanel from './components/BtnPanel.js';
import Display from './components/Display.js';

function App() {
  return (
    <React.Fragment>
      <div className="calc-ui">
        <Display result={0}/>
        <ButtonPanel />
      </div>
    </React.Fragment>
  );
}

export default App;
