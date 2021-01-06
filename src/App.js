import React, { useState } from 'react';
/* import './App.css'; */
import WeatherPage from './Components/WeatherPage';

const App = () => {
  const [lat, setLat] = useState(46.762716);
  const [lng, setLng] = useState(23.5585658);

  const takeCoordonatesFromMapClick = data => {
    setLat(parseFloat(data[0].trim()));
    setLng(parseFloat(data[1].trim()));

    //console.log('parinte', {lat: lat, lng: lng});
  }

  return (
    <WeatherPage
      lat={lat}
      lng={lng}
      coords={{lat: lat, lng: lng}}
      functionMap={takeCoordonatesFromMapClick}
    />
  )
}

export default App;


