import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  n1 = new Big(numberOne);
  n2 = new Big(numberTwo);
  result = 0
  switch (operation) {
    case '÷':
      result = n1.div(n2);
      break
    case 'X':
      result = n1.times(n2);
      break;
    case '-':
      result = n1.minus(n2);
      break;
    case '+':
      result = n1.plus(n2);
      break;
    case '=':
      result = n1.Div(n2);
      break;
    default:
      return result;
  }
  return result;
};

export { operate as default };
