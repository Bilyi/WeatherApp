import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadWeather, onSelectDay, loadWeatherByCity, onAddCity, onDeleteCity, onSelectCity, onClearDate } from "../actions/index";
import Loading from "../components/Loading";
import WrapperApp from "../components/WrapperApp";

class Weather extends Component {

    constructor(props) {
        super(props);

        this.selectDay = this.selectDay.bind(this);
        this.weatherByCity = this.weatherByCity.bind(this);
        this.addCityFunc = this.addCityFunc.bind(this);
        this.deleteCityFunc = this.deleteCityFunc.bind(this);
        this.refreshDate = this.refreshDate.bind(this);
    }

    componentWillMount() {
        if(Object.keys(this.props.weather).length > 0) {
            this.props.onClearDate();
        }
        this.loadDate();
    }

    loadDate() {
        navigator.geolocation.getCurrentPosition(data => {
            const { latitude, longitude } = data.coords;
            this.props.onGetWeather(latitude, longitude);
        }, () => {
            const defaultLatitude = '50.4333', defaultLongitude = '30.5167';
            this.props.onGetWeather(defaultLatitude, defaultLongitude);
        });
    }

    selectDay(day) {
        this.props.onSelectDay(day);
    }

    weatherByCity(city) {
        this.props.loadWeatherByCity(city.cityName);
        this.props.onSelectCity(city);
    }

    addCityFunc(e) {
        e.preventDefault();
        this.props.onAddCity(e.target.elements.city.value);
        e.target.elements.city.value = '';
    }
    deleteCityFunc(city) {
        this.props.onDeleteCity(city);
        this.loadDate();
    }
    refreshDate () {
        let city = this.props.activeCity.cityName;
        if (city) {
            this.props.loadWeatherByCity(city)
        } else {
            this.loadDate();
        }
    }
    
    renderWeatherInfo() {

        if(Object.keys(this.props.weather).length === 0) {
            return (
                <Loading/>
            )
        } else {
            return (
                <WrapperApp
                    refreshDate={this.refreshDate}
                    weather={this.props.weather}
                    receivedDays={this.props.receivedDays}
                    activeDay={this.props.activeDay}
                    week={this.props.week}
                    weatherByCity={this.weatherByCity}
                    selectDay={this.selectDay}
                    addCityFunc={this.addCityFunc}
                    cities={this.props.cities}
                    deleteCityFunc={this.deleteCityFunc}
                    activeCity={this.props.activeCity}
                />
            )
        }
    }

    render() {
        return (
            <div>
                {this.renderWeatherInfo()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        weather: state.weatherReducer.weather,
        receivedDays: state.weatherReducer.receivedDays,
        activeDay: state.weatherReducer.activeDay,
        activeCity: state.weatherReducer.activeCity,
        week: state.weatherReducer.week,
        cities: state.weatherReducer.cities,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        onGetWeather: bindActionCreators(loadWeather, dispatch),
        onSelectDay: bindActionCreators(onSelectDay, dispatch),
        loadWeatherByCity: bindActionCreators(loadWeatherByCity, dispatch),
        onAddCity: bindActionCreators(onAddCity, dispatch),
        onDeleteCity: bindActionCreators(onDeleteCity, dispatch),
        onSelectCity: bindActionCreators(onSelectCity, dispatch),
        onClearDate: bindActionCreators(onClearDate, dispatch),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Weather);