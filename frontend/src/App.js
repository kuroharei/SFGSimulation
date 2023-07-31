import './App.css';
import Canvas from './Components/Canvas';
import {useState, useEffect} from 'react';
import Simulation from './Components/Simulation';
import Navbars from './Components/Navbars';

function App() {
  return (
    <div className="App">
      <Navbars/>
      <Simulation/>
    </div>
  );
}

export default App;
