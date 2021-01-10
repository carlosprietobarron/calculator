import React from 'react';
/* eslint-disable react/prop-types, no-console */
function Display(props) {
  const { result } = props;
  return (
    <div className="calc-display">
      <span>0.0</span>
    </div>
  );
}
/* eslint-enable react/prop-types, no-console */
export default Display;
