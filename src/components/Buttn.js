import React from 'react';

/* eslint-disable react/prop-types, no-console */
function Buttn(props) {
  const { name } = props;
  return (
    <div>
      <button type="button">{name}</button>
    </div>
  );
}

export default Buttn;
/* eslint-enable react/prop-types, no-console */
