import React, { useState, useEffect } from 'react';
import './WeatherPage.css';
import Header from './Header/Header';
import Map from './MapGoogle/Map';
import WeatherCard from './CurrentWeatherCard/CurrentWeatherCard';
import Forecast from './Forecast/Forecast';
import axios from 'axios';
import shortid from 'shortid';



const WeatherPage = React.memo(props => {
  const [todayData, setTodayData] = useState();
  const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    const apiKeyToday = `2ca9ca04865ce518fae4c576a4ef76ec`;
    const apiKeyForecast = `2ca9ca04865ce518fae4c576a4ef76ec`;
    axios.get(` https://api.openweathermap.org/data/2.5/weather?lat=${props.lat}&lon=${props.lng}&units=metric&appid=${apiKeyToday} `)
      .then(response => {
        setTodayData(response);
      });
    axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lng}&units=metric&appid=${apiKeyForecast}`)
      .then(responseF => {
        setForecastData(responseF.data.daily);
      })

  }, [props.functionMap, props.lat, props.lng])

  //console.log('getForecast-forecastData---xx-yy--->', forecastData)

  const forecastCards = () => {
    return (
      <React.Fragment>
        {forecastData.map((el, idx) => (
          <Forecast
            key={shortid.generate()}
            dayName={el.dt}
            clouds={el.clouds}
            humidity={el.humidity}
            pressure={el.pressure}
            sunrise={el.sunrise}
            sunset={el.sunset}
            uvi={el.uvi}
            wind_speed={el.wind_speed}
            tempMin={el.temp.min}
            tempMax={el.temp.max}
            weather_description={el.weather[0].description}
            weather_icon={el.weather[0].icon}
          />
        ))}
      </React.Fragment>
    )
  }

  return (
    <div className="WeatherPage">
      { todayData ?
        <React.Fragment>
          <Header name={todayData.data.name} />
          <div className="inputs">
            <label>Lat</label>
            <input
              value={todayData.data.coord.lat}
              readOnly />
            <label>Lng</label>
            <input
              value={todayData.data.coord.lon}
              readOnly />
          </div>

          <Map
            defaultCenter={props.coords}
            onchange={e => { props.functionMap(e) }}
          />
          <WeatherCard
            umiditate={todayData.data.main.humidity}
            rasarit={todayData.data.sys.sunrise}
            apus={todayData.data.sys.sunset}
            temp={todayData.data.main.temp}
            presiune={todayData.data.main.pressure}
            name={todayData.data.name}
            timezone={todayData.data.sys.sunrise}
          />
          <p className="prognoza">Prognoza vremii in {todayData.data.name} pentru 8 zile  </p>
          {forecastCards()}
        </React.Fragment> : ''}
    </div>
  );
})

export default WeatherPage;