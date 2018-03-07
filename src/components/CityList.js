import React, { Component } from 'react';

class CityList extends Component {

    render() {
        return(
            <li className={`cities-btn ${this.props.class}`}>
                <div className="cities-name" onClick={this.props.weatherByCity}>{this.props.cityName}</div>
                <i className="fa fa-trash-o" onClick={this.props.deleteCityFunc}></i>
            </li>
        )
    }
}

export default CityList;