import React, { useEffect, useRef, useState } from 'react';
import Emitter from '../../emitter';

const Humidity = () => {
  const [humidity, setHumidity] = useState(0) 
  const lastUpdated = useRef(new Date())

  useEffect(() => {
    Emitter.on('HUMIDITY', (value) => {
      setHumidity(value)
      lastUpdated.current = new Date()
    })

    setInterval(() => {
      // console.log("Humidity",(new Date()).getTime() ,lastUpdated.current.getTime(),(new Date()).getTime()-1000 > lastUpdated.current.getTime())

      if((new Date()).getTime()-1000 > lastUpdated.current.getTime()){
        setHumidity('N/A')
      }
    }, 1000)

  },[])

  return ( 
    <div className="px-3 py-2">
      <h3>Humidity</h3>
      <p>{humidity} %</p>
    </div>
  );
}
 
export default Humidity;