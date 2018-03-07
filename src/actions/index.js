import axios from 'axios';

export function loadWeather(lat, lon) {
    return(dispatch) => {
        return axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${ lat }&lon=${ lon }&units=metric&appid=127ea8459f81b72daeda3f21fd578e9b`)
            .then((response)=>{
                dispatch(getData(response.data));
            })
            .catch((error)=>{
                let message = 'Could not load data';
                dispatch(noData(message));
            });
    }
}

export function loadWeatherByCity(city) {
    return(dispatch) => {
        return axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${ city }&units=metric&appid=127ea8459f81b72daeda3f21fd578e9b`)
            .then((response)=>{
                dispatch(getDataByCity(response.data));
            })
            .catch((error)=>{
                let message = `Нou have entered a wrong city: ${ city }. Please try again`;
                dispatch(noData(message, city));
            })
    }
}

export function noData(message, city='') {
    let data = {
        city: city,
        message: message
    };
    return {
        type: 'NO_DATA',
        data: data
    }
}
export function getData(data) {
    return {
        type: 'GET_DATA',
        data: data
    }
}

export function getDataByCity(data) {
    return {
        type: 'GET_DATA_BY_CITY',
        data: data
    }
}

export function onSelectDay(day) {
    return {
        type: 'SELECT_DAY',
        day: day
    }

}

export function onSelectCity(city) {
    return {
        type: 'SELECT_CITY',
        city: city
    }

}

export function onAddCity(name) {
    let city = {
        id: Date.now(),
        cityName: name
    };
    return {
        type: 'ADD_CITY',
        city: city
    }
}
export function onDeleteCity(city) {
    return {
        type: 'DELETE_CITY',
        city: city
    }
}
export function onClearDate() {
    return {
        type: 'CLEAR_DATA'
    }
}