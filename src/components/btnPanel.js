import React from 'react';
import Buttn from './Buttn';

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
    symbol:'%',
  },
  {
    name: 'div',
    symbol: '÷',
  }
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
  }
];
const group3 = [
  {
    name: 'four',
    symbol: '4',
  },
  { 
    name: 'five',
    symbol:'5',
  }, 
  {
    name: 'six',
    symbol: '6',
  },
  {
    name: 'minus',
    symbol: '-',
  }
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
  }
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
  }
];


function Btngroup(props){
  console.log( 'group 1', props);
  const {  group } = props;
  return (
    <div className='btn-group' id='loop1'>
        {group.map(btn=>(
          <Buttn name={btn.name} symbol={btn.symbol}/>
        ))}
    </div>
  );  
}

function ButtonPanel() {
  return (
    <div className='btn-panel'>
      <Btngroup group={group1}/>
      <Btngroup group={group2}/>
      <Btngroup group={group3}/>
      <Btngroup group={group4}/>
      <Btngroup group={group5}/>
    </div>
  );
}

export default ButtonPanel;
