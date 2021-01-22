import '../App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './home';
import Display from './display';
import ButtonPanel from './btnPanel';
import calculate from '../logic/calculate';
import Navbar from './navbar';
import Quote from './quote';

function App() {
  const [opObj, setopObj] = useState({
    total: null,
    next: null,
    operation: null,
    point: false,
  });

  const updateState = calculator => {
    console.log('update state', calculator);
    console.log(opObj);
    setopObj({
      total: calculator.total,
      next: calculator.next,
      operation: calculator.operation,
      point: calculator.point,
    });
    console.log(opObj);
  };

  const handleClick = buttonName => {
    console.log('handleclick', buttonName, opObj);
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
      <Router>
        <div className="calc-ui">
          <Navbar />
          <Home />
          <Switch>
            <Route path="/display" component={Display} />
            <Route path="/display" component={() => <ButtonPanel updateApp={handleClick} />} />
            <Quote />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
