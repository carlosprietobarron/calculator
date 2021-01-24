import '../App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './navbar';
import Home from './home';
import Calculator from './calculator';
import Quote from './quote';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/calculator" component={Calculator} />
          <Route path="/quote" component={Quote} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
