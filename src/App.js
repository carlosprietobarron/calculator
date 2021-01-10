import './App.css';
import BtnPanel from './components/BtnPanel.js';
import Display from './components/Display.js';

function App() {
  return (
    <div className="App">
      <div className="calc-ui">
        <Display />
        <BtnPanel />
      </div>
    </div>
  );
}

export default App;
