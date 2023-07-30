import './App.css';
import Canvas from './Components/Canvas';
import {useState, useEffect} from 'react';
import Simulation from './Components/Simulation';

function App() {


  return (
    <div className="App">
      <Simulation/>
      {/* <Canvas
        width={700}
        height={500}
      /> */}
    </div>
  );
}

export default App;
