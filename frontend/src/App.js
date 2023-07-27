import './App.css';
import Canvas from './Components/Canvas';
import {useState, useEffect} from 'react';

function App() {


  return (
    <div className="App">
      <Canvas
        width={700}
        height={500}
      />
    </div>
  );
}

export default App;
