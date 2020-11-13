import React, { useState, useEffect, useRef } from 'react';
import Emitter from '../../emitter';

const AirPressure = () => {
  const [airPressure, setAirPressure] = useState(0)
  const lastUpdated = useRef(new Date())

 
  useEffect(() => {
    Emitter.on('AIR_PRESSURE', (value) => {
      setAirPressure(value);
      lastUpdated.current = new Date()
    })

    setInterval(() => {
      // console.log("Air Pressure",(new Date()).getTime() ,lastUpdated.current.getTime(),(new Date()).getTime()-1000 > lastUpdated.current.getTime())
      if((new Date()).getTime()-1000 > lastUpdated.current.getTime()){
        setAirPressure('N/A')
      }
    }, 1000)
  },[])

  return ( 
    <div className="px-3 py-2">
      <h3>Air Pressure</h3>
      <p>{airPressure} Pascal</p>
    </div>
  );
}
 
export default AirPressure;