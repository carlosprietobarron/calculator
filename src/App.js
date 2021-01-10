import './App.css';
import React from 'react';
import Display from './components/Display.js';
import ButtonPanel from './components/btnPanel.js';

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
