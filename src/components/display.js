import React from 'react';
/* eslint-disable react/prop-types, no-console, arrow-body-style */
const Display = props => {
  const { result } = props;

  return (
    <div className="calc-display">
      <span>{result}</span>
    </div>
  );
};
/* eslint-enable react/prop-types, no-console, arrow-body-style */
export default Display;
