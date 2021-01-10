import './App.css';
import React from 'react';
import Display from './components/display';
import ButtonPanel from './components/btnPanel';

function App() {
  return (
    <>
      <div className="calc-ui">
        <Display result={0} />
        <ButtonPanel />
      </div>
    </>
  );
}

export default App;
