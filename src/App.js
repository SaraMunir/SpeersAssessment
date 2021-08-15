import './App.css';
import React, { useState, useRef } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./components/HomePage"
import NavMenu from './components/NavMenu';
import Red from './components/Red';
import Pricing from './components/Pricing';
import Yellow from './components/Yellow';
import TryNowBtn from './components/TryNowBtn';
function App() {
  const tryNow = useRef();
  function moveToPricing(){
    console.log('what?')
    tryNow.current.scrollIntoView();
  }
  return (
    <div className="App">
      <Router>
        <NavMenu/>
        <HomePage moveToPricing={moveToPricing}/>
        <div>
          <TryNowBtn moveToPricing={moveToPricing}/>
          <Red  moveToPricing={moveToPricing}/>
          <Yellow/>
        </div>
        <Pricing tryNow={tryNow}/>
      </Router>
    </div>
  );
}

export default App;
