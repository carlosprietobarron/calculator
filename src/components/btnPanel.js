import React from 'react';
import PropTypes from 'prop-types';
import Buttn from './Buttn';

/* eslint-disable react/prop-types, no-console, arrow-body-style */
const group1 = [
  {
    name: 'AC',
    symbol: 'AC',
  },
  {
    name: 'sign',
    symbol: '+/-',
  },
  {
    name: 'percent',
    symbol: '%',
  },
  {
    name: 'div',
    symbol: '÷',
  },
];
const group2 = [
  {
    name: 'seven',
    symbol: '7',
  },
  {
    name: 'eight',
    symbol: '8',
  },
  {
    name: 'nine',
    symbol: '9',
  },
  {
    name: 'multiply',
    symbol: 'X',
  },
];
const group3 = [
  {
    name: 'four',
    symbol: '4',
  },
  {
    name: 'five',
    symbol: '5',
  },
  {
    name: 'six',
    symbol: '6',
  },
  {
    name: 'minus',
    symbol: '-',
  },
];
const group4 = [
  {
    name: 'one',
    symbol: '1',
  },
  {
    name: 'two',
    symbol: '2',
  },
  {
    name: 'three',
    symbol: '3',
  },
  {
    name: 'add',
    symbol: '+',
  },
];
const group5 = [
  {
    name: 'zero',
    symbol: '0',
  },
  {
    name: 'point',
    symbol: '.',
  },
  {
    name: 'equal',
    symbol: '=',
  },
];

const Btngroup = props => {
  const { group } = props;
  return (
    <div className="btn-group" id="loop1">
      {group.map(btn => (
        <Buttn key={btn.name} name={btn.name} symbol={btn.symbol} />
      ))}
    </div>
  );
};

const ButtonPanel = () => {
  return (
    <div className="btn-panel">
      <Btngroup group={group1} />
      <Btngroup group={group2} />
      <Btngroup group={group3} />
      <Btngroup group={group4} />
      <Btngroup group={group5} />
    </div>
  );
};

Btngroup.propTypes = {
  group: PropTypes.shape({
    name: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
  }).isRequired,
};

/* eslint-enable react/prop-types, no-console, arrow-body-style */
export default ButtonPanel;
