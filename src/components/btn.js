import React from 'react';

/* eslint-disable react/prop-types, no-console */
function Bttn(props) {
  const { name } = props;
  return (
    <div>
      <button type="button">{name}</button>
    </div>
  );
}

export default Bttn;
/* eslint-enable react/prop-types, no-console */
