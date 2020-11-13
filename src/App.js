import React, { useEffect } from 'react';
import './App.css';
import { AirPressure, Header, Humilidity, Temperature } from './components'; 
import Emitter from './emitter';


const App = () => {
  const min = 100;
  const max = 2000;
  useEffect(() => {
    setInterval(() => {
      Emitter.emit('TEMPERATURE', (Math.floor(Math.random() * (50 - 10) ) + 10))
    }, (Math.floor(Math.random() * (max - min) ) + min))
    setInterval(() => {
      Emitter.emit('HUMIDITY', (Math.floor(Math.random() * (100 - 0) ) + 0))
    }, (Math.floor(Math.random() * (max - min) ) + min))
    setInterval(() => {
      Emitter.emit('AIR_PRESSURE', (Math.floor(Math.random() * (100 - 0) ) + 0))
    }, (Math.floor(Math.random() * (max - min) ) + min))
  },[])

  return (
    <React.Fragment>
      <Header /> 
      <div className="row mt-4" >
        <div className="col-4">
          <Temperature />
        </div>
        <div className="col-4">
          <Humilidity />
        </div>
        <div className="col-4">
          <AirPressure />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
