import React from 'react';
import './Forecast.css';
import shortid from 'shortid';
import timeConverter from '../Utilitaryhooks/timeconverter.js';


const Forecast = React.memo((props) => {        
    //console.log('const forecast = (props) =------>', timeConverter(props.dayName).timeDateMonth)     
    return (
        <div className="container" key={shortid.generate()}>
            <div className="Card">
                <div>
                    <p id="title">Vremea in {timeConverter(props.dayName).timeDateMonth} </p>
                    <div className="descriere">
                        <p >Descriere  : {props.weather_description} </p>
                        <div className="icon" style={{background: `url(http://openweathermap.org/img/wn/${props.weather_icon}@2x.png)`}} />
                    </div>
                </div>                
                <div className="data" >
                    <p>Nori : {props.clouds} %</p>
                    <p>Umiditate : {props.humidity} %</p>
                    <p>Soarele rasare :{ timeConverter(props.sunrise).timeHour }  </p>
                    <p>Soarele apune : { timeConverter(props.sunset).timeHour } </p>
                    <p>Temp min : {props.tempMin} grd C </p>
                    <p>Temp max : {props.tempMax} grd C </p>
                    <p>Presiune : {props.pressure}  mb</p>
                    <p>Indice UV : {props.uvi} uvi</p>
                    <p>Viteza vant : {props.wind_speed} m/s</p>                    
                </div>
            </div>
        </div>
    );
})

export default Forecast;
