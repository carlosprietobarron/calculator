import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const n1 = Big(numberOne || '0');
  const n2 = Big(numberTwo || '0');
  let result = 0;
  switch (operation) {
    case '÷':
      result = n1.div(n2);
      break;
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
      return result.toString();
  }
  return result.toString();
};

export { operate as default };
