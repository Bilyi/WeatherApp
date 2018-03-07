import React, { Component } from 'react';

import CityList from '../components/CityList';

class WeatherByCity extends Component {

    renderCitiesList() {

        if(this.props.cities.length === 0) {
            return (
                null
            )
        } else {
            return(
                <ul className="cities">
                {
                    this.props.cities.map((city) => {
                    return (
                        <CityList
                            key={city.id}
                            class={city.id === this.props.activeCity.id ? 'active-city': ''}
                            cityName={city.cityName}
                            weatherByCity={this.props.weatherByCity.bind(null, city)}
                            deleteCityFunc={this.props.deleteCityFunc.bind(null, city)}
                        />
                    )
                })
        }
        </ul>
            )
        }
    }

    render() {
        return (
            <div>
                {this.renderCitiesList()}
            </div>
        )
    }
}

export default WeatherByCity;