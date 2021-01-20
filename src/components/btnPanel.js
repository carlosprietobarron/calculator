import React from 'react';
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

const ButtonPanel = props => {
  console.log('props panel', props);
  const handleClick = buttonName => {
    const { updateApp } = props;
    updateApp(buttonName);
  };

  return (
    <div className="btn-panel">
      <div className="btn-group" id="loop1">
        {group1.map(btn => (
          <Buttn updateParent={handleClick} key={btn.name} name={btn.name} symbol={btn.symbol} />
        ))}
      </div>
      <div className="btn-group" id="loop2">
        {group2.map(btn => (
          <Buttn updateParent={handleClick} key={btn.name} name={btn.name} symbol={btn.symbol} />
        ))}
      </div>
      <div className="btn-group" id="loop3">
        {group3.map(btn => (
          <Buttn updateParent={handleClick} key={btn.name} name={btn.name} symbol={btn.symbol} />
        ))}
      </div>
      <div className="btn-group" id="loop4">
        {group4.map(btn => (
          <Buttn updateParent={handleClick} key={btn.name} name={btn.name} symbol={btn.symbol} />
        ))}
      </div>
      <div className="btn-group" id="loop5">
        {group5.map(btn => (
          <Buttn updateParent={handleClick} key={btn.name} name={btn.name} symbol={btn.symbol} />
        ))}
      </div>
    </div>
  );
};

/* eslint-enable react/prop-types, no-console, arrow-body-style */
export default ButtonPanel;
