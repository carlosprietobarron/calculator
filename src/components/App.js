import '../App.css';
import React from 'react';
import Display from './display';
import ButtonPanel from './btnPanel';
import calculate from '../logic/calculate';
/* eslint-disable react/prop-types, no-console, arrow-body-style */
const App = () => {
  /* testing clculate */
  const calculator = {
    total: 0,
    next: 0,
    operation: '+',
  };
  btnName = '+';
  const test = calculate(calculator, btnName);
  return (
    <>
      <div className="calc-ui">
        <Display result={test} />
        <ButtonPanel />
      </div>
    </>
  );
};
/* eslint-enable react/prop-types, no-console, arrow-body-style */
export default App;
