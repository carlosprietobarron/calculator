import '../App.css';
import React from 'react';
import Display from './display';
import ButtonPanel from './btnPanel';
/* eslint-disable react/prop-types, no-console, arrow-body-style */
const App = () => {
  return (
    <>
      <div className="calc-ui">
        <Display result={0} />
        <ButtonPanel />
      </div>
    </>
  );
};
/* eslint-enable react/prop-types, no-console, arrow-body-style */
export default App;
