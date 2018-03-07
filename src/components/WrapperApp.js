import React, { Component } from 'react';
import WeatherByDayWrapp from "../components/WeatherByDayWrapp";
import DaysWrapp from "../components/DaysWrapp";
import WeatherByCity from "../components/WeatherByCity";
import AddCity from "../components/AddCity";

class WrapperApp extends Component {

    render() {
        return(
            <div>
                <div className="head-content">
                    <h2 className="title">Weather in {this.props.weather.city.name}, {this.props.weather.city.country}</h2>
                    <i className="fa fa-refresh" aria-hidden="true" onClick={this.props.refreshDate}></i>
                </div>
                <DaysWrapp
                    receivedDays={this.props.receivedDays}
                    selectDay={this.props.selectDay}
                    activeDay={this.props.activeDay}
                />
                <WeatherByDayWrapp
                    week={this.props.week}
                    weather={this.props.weather}
                    activeDay={this.props.activeDay}
                    receivedDays={this.props.receivedDays}
                />
                <AddCity addCityFunc={this.props.addCityFunc}/>
                <WeatherByCity
                    weatherByCity={this.props.weatherByCity}
                    cities={this.props.cities}
                    deleteCityFunc={this.props.deleteCityFunc}
                    activeCity={this.props.activeCity}
                />
            </div>
        )
    }
}

export default WrapperApp;