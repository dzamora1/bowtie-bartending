import React from 'react';
import Nav from './Nav';
import AboutUs from './AboutUs';
import Packages from './Packages';
import Pricing from './Pricing';
import Interact from './Interact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav/>
      <AboutUs/>
      <Packages/>
      <Pricing/>
      <Interact/>
      
      </div>
  );
}

export default App;
