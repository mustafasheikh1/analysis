import React, { useEffect, useState, useRef } from 'react';
import Emitter from '../../emitter';

const Temperature = () => {
  const [temperature, setTemperature] = useState(0);
  const lastUpdated = useRef(new Date())

  useEffect(() => {
    Emitter.on('TEMPERATURE', (value) => {
      setTemperature(value)
      lastUpdated.current = new Date()
    })

    setInterval(() => {
      // console.log("temperature",(new Date()).getTime() ,lastUpdated.current.getTime(),(new Date()).getTime()-1000 > lastUpdated.current.getTime())
      if((new Date()).getTime()-1000 > lastUpdated.current.getTime()){
        setTemperature('N/A')
      }
    }, 1000)
  },[])


  return ( 
    <div className="px-3 py-2">
      <h3>Temperature</h3>
      <p>{temperature} c</p>
    </div>
  );
}
 
export default Temperature;