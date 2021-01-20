import '../App.css';
import React, { useState } from 'react';
import Display from './display';
import ButtonPanel from './btnPanel';
import calculate from '../logic/calculate';

function App() {
  const [opObj, setopObj] = useState({
    total: null,
    next: null,
    operation: null,
    point: false,
  });

  const updateState = calculator => {
    setopObj({
      total: calculator.total,
      next: calculator.next,
      operation: calculator.operation,
      point: calculator.point,
    });
  };

  const handleClick = buttonName => {
    const {
      total, next, operation, point,
    } = opObj;
    const calculator = calculate(
      {
        total,
        next,
        operation,
        point,
      },
      buttonName,
    );
    updateState(calculator);
  };

  let { total, next } = opObj;
  if (!total) total = 0;
  if (!next) next = 0;
  if (next !== 0) total = next;

  return (
    <>
      <div className="calc-ui">
        <Display result={total} />
        <ButtonPanel updateApp={handleClick} />
      </div>
    </>
  );
}

export default App;
