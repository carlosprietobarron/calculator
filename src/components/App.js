import '../App.css';
import React, { Component } from 'react';
import Display from './display';
import ButtonPanel from './btnPanel';
import calculate from '../logic/calculate';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
      point: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    this.sendToCalc(buttonName);
  }

  sendToCalc(buttonName) {
    const {
      total, next, operation, point,
    } = this.state;
    const calculator = calculate({
      total, next, operation, point,
    }, buttonName);
    this.updateState(calculator);
  }

  updateState(calculator) {
    this.setState({
      total: calculator.total,
      next: calculator.next,
      operation: calculator.operation,
      point: calculator.point,
    });
  }

  render() {
    let { total, next } = this.state;
    if (!total) total = 0;
    if (!next) next = 0;
    if (next !== 0) total = next;
    return (
      <>
        <div className="calc-ui">
          <Display result={total} />
          <ButtonPanel updateApp={this.handleClick} />
        </div>
      </>
    );
  }
}

export default App;
