import React from 'react';

function Display(props) {
  const { result } = props;
  console.log("result ",result);
  return (
    <div className="calc-display">
      <span>0.0</span>
    </div>
  );
}

export default Display;
