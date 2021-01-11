import '../App.css';
import React from 'react';
import Display from './display';
import ButtonPanel from './btnPanel';

const App = () => {
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
