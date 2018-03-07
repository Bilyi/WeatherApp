import React, { Component } from 'react';
import windDegImg from '../assets/images/wind-deg.png';

class WeatherByDay extends Component {

    render() {

        let date = new Date(this.props.dt);
        let dd = date.getDate();
        let mm = date.getMonth() + 1;
        let hh = date.getHours();
        let mn = date.getMinutes();
        let weekDay = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        let day = weekDay[date.getDay()];

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;
        if (hh < 10) hh = '0' + hh;
        if (mn < 10) mn = '0' + mn;

        return(
            <li className="weather-item">
                <p className="weather-item-time">{`${hh}:${mn}`}</p>
                <div className="weather-item-info">
                    <img src={`https://openweathermap.org/img/w/${this.props.icon}.png`}/>
                    <p className="weather-desc">{this.props.desc}</p>
                    <p className="weather-item-temp"> <i className="fa fa-thermometer-three-quarters" aria-hidden="true"></i>  <span>{Math.round(this.props.temp)}</span> &#8451;</p>
                </div>
                <p><i className="fa fa-tint" aria-hidden="true"></i>  {this.props.humidity} %</p>
                <div className="weather-item-wind">
                    <p><i className="fa fa-location-arrow" aria-hidden="true" style={{transform: `rotate(${this.props.windDeg}deg)`}}></i> {Math.round(this.props.windSpeed)} m/s </p>
                </div>
            </li>
        )
    }
}

export default WeatherByDay;