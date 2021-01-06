import React from 'react';
import './CurrentWeatherCard.css';
import timeConverter from '../Utilitaryhooks/timeconverter.js';

const WeatherCard = React.memo((props) => {    

    return (        
        <div className="cont">
            <p id="title">Vremea azi {timeConverter(props.timezone).timeDateMonthYearHour} in {props.name} </p>
            <div className="datas">
                <p>Umiditate : {props.umiditate} %</p>
                <p>Soarele rasare : {timeConverter(props.rasarit).timeHour} </p>
                <p>Soarele apune : {timeConverter(props.apus).timeHour} </p>
                <p>Temperatura : {props.temp} grd Celsius </p>
                <p>Presiune : {props.presiune} mb</p>
            </div>
        </div>
    );
})

export default WeatherCard;
