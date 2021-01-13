import operate from './operate';

const calculate = (() => {
  const calculate = (obj, btnName) => {
    const calculator = {
      total: obj.total,
      netx: obj.next,
      operation: obj.operation,
    };

    if (btnName === '+/-') {
      calculator.total *= -1;
      calculator.next = 0;
      calculator.operation = null;
      return calculator;
    }

    if (btnName === 'A/C') {
      calculator.total = 0;
      calculator.next = 0;
      calculator.operation = null;
      return calculator;
    }

    if (btnName === '%') {
      calculator.total /= 100;
      calculator.next = 0;
      calculator.operation = '%';
      return calculator;
    }

    calculator.total = operate(calculator.total, calculator.next, btnName);
    calculator.next = 0;
    calculator.operation = null;
    return calculator;
  };

  return { calculate };
})();

export default calculate;
