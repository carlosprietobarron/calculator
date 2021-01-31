import calculate from './calculate';

describe('Calculate function module', () => {
  describe('click the sign change button', () => {
    test('change 2 to -2', () => {
      const objData = {
        total: 5,
        next: 2,
        operation: '+',
        point: false,
      };
      expect(calculate(objData, '+/-')).toEqual({
        total: 5, next: -2, operation: '+', point: false,
      });
    });
  });

  describe('click the equal button', () => {
    test('Change total to 7 and next to null', () => {
      const objData = {
        total: 5,
        next: 2,
        operation: '-',
        point: false,
      };
      expect(calculate(objData, '=')).toEqual({
        total: '3', next: null, operation: '-', point: false,
      });
    });
  });

  describe('click a number button', () => {
    test('change 2 to -2', () => {
      const objData = {
        total: '5',
        next: 2,
        operation: '+',
        point: false,
      };
      expect(calculate(objData, '2')).toEqual({
        total: '5', next: '22', operation: '+', point: false,
      });
    });
  });

  describe('click an operation button', () => {
    test('calculate sumatory and prepare next op', () => {
      const objData = {
        total: '5',
        next: '2',
        operation: '+',
        point: false,
      };
      expect(calculate(objData, 'X')).toEqual({
        total: '7', next: null, operation: 'X', point: false,
      });
    });
  });

  describe('click an AC operation button', () => {
    test('Reset calculator object to null', () => {
      const objData = {
        total: '5',
        next: '2',
        operation: '+',
        point: false,
      };
      expect(calculate(objData, 'AC')).toEqual({
        total: null, next: null, operation: null, point: false,
      });
    });
  });
});
