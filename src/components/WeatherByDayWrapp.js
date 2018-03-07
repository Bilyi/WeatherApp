import React, { Component } from 'react';
import WeatherByDay from "./WeatherByDay";

class WeatherByDayWrapp extends Component {

    render() {
        return(
            <ul className="weather">
                {
                    this.props.weather.list.filter((day) => {
                        let d = new Date(day.dt_txt);
                        let dname = this.props.week[d.getDay()];
                        return dname === this.props.activeDay
                    }).map((day)=>{
                        return (
                            <WeatherByDay
                                key={day.dt}
                                dt={day.dt_txt}
                                temp={day.main.temp}
                                humidity={day.main.humidity}
                                desc={day.weather[0].description}
                                icon={day.weather[0].icon}
                                windSpeed={day.wind.speed}
                                windDeg={day.wind.deg}
                            />
                        )
                    })
                }
            </ul>
        )
    }
}

export default WeatherByDayWrapp;