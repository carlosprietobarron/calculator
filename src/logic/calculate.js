import operate from './operate';

const calculate = (obj, btnName) => {
  const binOperator = ['X', '÷', '+', '-'];
  const isnum1 = value => /^\d*\.?\d+$/.test(value);
  const calculator = {
    total: obj.total,
    next: obj.next,
    operation: obj.operation,
    point: obj.point,
  };

  const resetCalc = obj => {
    calculator.total = obj.total;
    calculator.total = null;
    calculator.next = null;
    calculator.operation = null;
    calculator.point = false;
    return calculator;
  };

  const joinVal = (val1, val2, point) => {
    if (point) {
      if (isnum1(val1)) {
        let strNum = val1.toString();
        if (!strNum.includes('.')) strNum += '.';
        strNum += val2.toString();
        return parseFloat(strNum);
      }
      return parseFloat(val1);
    }

    if (isnum1(val1)) {
      if (val1 === 0) return val2.toString();
      return val1.toString() + val2.toString();
    }
    return val2;
  };

  if (btnName === '.') {
    calculator.point = true;
    return calculator;
  }

  // 'AC' operation reset the calculator
  if (btnName === 'AC') {
    return resetCalc(calculator);
  }

  // percentage
  if (btnName === '%') {
    if (!calculator.total && calculator.next !== null) {
      if (calculator.next < 0) calculator.next = operate(calculator.next, -1, 'X');
      calculator.total = operate(calculator.next, 100, '÷');
      calculator.next = null;
      calculator.operation = 'X';
    }
  }

  // '=' if ready execute operation
  if (btnName === '=') {
    if (calculator.total !== null && !calculator.next && calculator.operation !== null) {
      if (binOperator.includes(calculator.operation)) {
        calculator.next = operate(calculator.total, calculator.total, calculator.operation);
        calculator.total = null;
        calculator.operation = null;
        calculator.point = false;
      }
      return calculator;
    }

    if (calculator.total !== null && !calculator.next !== null && calculator.operation !== null) {
      if (binOperator.includes(calculator.operation)) {
        calculator.total = operate(calculator.total, calculator.next, calculator.operation);
        calculator.next = null;
        calculator.point = false;
      }
      return calculator;
    }

    return resetCalc(calculator);
  } // equal button case

  // begining
  if (!calculator.total && !calculator.next && !calculator.operation) {
    if (isnum1(btnName)) {
      calculator.total = null;
      calculator.next = joinVal(0, parseInt(btnName, 10), calculator.point);
      calculator.operation = null;
      return calculator;
    }
    if (binOperator.includes(btnName)) {
      calculator.total = null;
      calculator.next = 0;
      calculator.operation = btnName;
    }
    return calculator;
  }

  // first operand next operand
  if (!calculator.total && calculator.next !== null && !calculator.operation) {
    if (isnum1(btnName)) {
      calculator.next = joinVal(calculator.next, btnName, calculator.point);
    }
    if (btnName === '+/-') {
      calculator.next *= -1;
    }
    if (binOperator.includes(btnName)) {
      calculator.total = calculator.next;
      calculator.next = null;
      calculator.point = false;
      calculator.operation = btnName;
    }
    return calculator;
  }

  // clicking when total not null
  if (calculator.total !== null && !calculator.next && !calculator.operation) {
    if (isnum1(btnName)) {
      calculator.next = 0;
      calculator.next = joinVal(calculator.next, parseInt(btnName, 10), calculator.point);
    }

    if (binOperator.includes(btnName)) {
      calculator.next = 0;
      calculator.point = false;
      calculator.operation = btnName;
    }
    return calculator;
  }// clicking when total not null

  // one operand in total but an operation stored
  if (calculator.total !== null && !calculator.next && calculator.operation !== null) {
    if (isnum1(btnName)) {
      if (!calculator.next) calculator.next = 0;
      calculator.next = joinVal(calculator.next, btnName, calculator.point);
    }
    if (btnName === '+/-') {
      calculator.total *= -1;
    }
    if (binOperator.includes(btnName)) {
      // calculator.total = operate(calculator.total, calculator.total, calculator.operation);
      // calculator.total = calculator.total;
      calculator.next = null;
      calculator.operation = btnName;
    }
    return calculator;
  }// one operand

  // two operand capturing next
  if (calculator.total !== null && calculator.next !== null && calculator.operation !== null) {
    if (isnum1(btnName)) {
      calculator.next = joinVal(calculator.next, btnName, calculator.point);
    }
    if (btnName === '+/-') {
      calculator.next *= -1;
    }
    if (binOperator.includes(btnName)) {
      calculator.total = operate(calculator.total, calculator.next, calculator.operation);
      calculator.next = null;
      calculator.operation = btnName;
      calculator.point = false;
    }
    return calculator;
  }

  return resetCalc(calculator);
}; // end calculate

export default calculate;
