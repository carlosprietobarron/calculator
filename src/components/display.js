import React from 'react';
/* eslint-disable react/prop-types, no-console */
const Display = props => {
  const { result } = props;

  return (
    <div className="calc-display">
      <span>{result}</span>
    </div>
  );
}
/* eslint-enable react/prop-types, no-console */
export default Display;
