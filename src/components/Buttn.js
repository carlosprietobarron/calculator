import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable react/prop-types, no-console, arrow-body-style */
const Buttn = props => {
  const { name, symbol } = props;
  const operators = ['÷', 'X', '+', '-', '='];
  function handleClick() {
    props.updateParent(symbol);
  }

  return (
    <div className="div-key" style={{ width: symbol === '0' ? '50%' : '25%' }}>
      <button
        onClick={handleClick}
        type="button"
        id={name}
        className="key-btn"
        style={{ 'background-color': operators.includes(symbol) ? 'orange' : 'gray' }}
      >
        {symbol}
      </button>
    </div>
  );
};

Buttn.propTypes = {
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
};

export default Buttn;
/* eslint-enable react/prop-types, no-console, arrow-body-style */
