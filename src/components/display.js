import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable arrow-body-style */
const Display = props => {
  const { result } = props;

  return (
    <div className="calc-display">
      <span>{result}</span>
    </div>
  );
};

Display.propTypes = {
  result: PropTypes.number,
};

Display.defaultProps = {
  result: 0,
};
/* eslint-enable arrow-body-style */
export default Display;
