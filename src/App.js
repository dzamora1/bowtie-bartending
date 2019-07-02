import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from './Nav';
import AboutUs from './AboutUs';
import Packages from './Packages';
import Pricing from './Pricing';
import Interact from './Interact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Nav/>
      <Route exact path="/" component={AboutUs}/>
      <Route exact path="/AboutUS" component={AboutUs}/>
      <Route exact path="/Packages" component={Packages}/>
      <Route exact path="/Pricing" component={Pricing}/>
      <Route exact path="/Interact" component={Interact}/>
      </Router>
    </div>
  );
}

export default App;
