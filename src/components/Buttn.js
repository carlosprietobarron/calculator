import React from 'react';

/* eslint-disable react/prop-types, no-console */
const Buttn = props => {
  const { name, symbol } = props;

  return (
    <div className="div-key">
      <button type="button" id={name} className="key-btn">{symbol}</button>
    </div>
  );
}

export default Buttn;
/* eslint-enable react/prop-types, no-console */
