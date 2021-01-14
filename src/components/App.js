import '../App.css';
import React from 'react';
import Display from './display';
import ButtonPanel from './btnPanel';
import calculate from '../logic/calculate';
/* eslint-disable react/prop-types, no-console, arrow-body-style */
const App = () => {
  /* testing clculate */
  const test = calculate({ total: 0, next: 0, operation: 'X' }, 'X');
  const res = test.total.to_n;
  return (
    <>
      <div className="calc-ui">
        <Display result={res} />
        <ButtonPanel />
      </div>
    </>
  );
};
/* eslint-enable react/prop-types, no-console, arrow-body-style */
export default App;
