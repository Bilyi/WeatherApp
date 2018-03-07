const initState = {
    weather: {},
    receivedDays: [],
    activeDay: '',
    activeCity: {},
    week: ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
    cities: []
};

const peopleReducer = (state = initState, action) => {
    if(action.type === 'GET_DATA') {
        let daysArr = [];
        for (let i=0; i<action.data.list.length; i++) {
            let date = new Date(action.data.list[i].dt_txt);
            daysArr.push(state.week[date.getDay()]);
        }
        let uniqueDaysArr = daysArr.filter((v, i, a) => a.indexOf(v) === i);
        return {
            ...state,
            weather: action.data,
            receivedDays: uniqueDaysArr,
            activeDay: uniqueDaysArr[0],
            activeCity: {}
        }
    } else if(action.type === 'GET_DATA_BY_CITY') {
        let daysArr = [];
        for (let i=0; i<action.data.list.length; i++) {
            let date = new Date(action.data.list[i].dt_txt);
            daysArr.push(state.week[date.getDay()]);
        }
        let uniqueDaysArr = daysArr.filter((v, i, a) => a.indexOf(v) === i);
        return {
            ...state,
            weather: action.data,
            receivedDays: uniqueDaysArr,
            activeDay: uniqueDaysArr[0]
        }
    } else if (action.type === 'SELECT_DAY') {
        return {
            ...state,
            activeDay: action.day
        }
    } else if (action.type === 'SELECT_CITY') {
        return {
            ...state,
            activeCity: action.city
        }
    } else if (action.type === 'ADD_CITY') {
        let newCitiesArr = state.cities.slice();
        newCitiesArr.push(action.city);
        return {
            ...state,
            cities: newCitiesArr
        }
    } else if (action.type === 'DELETE_CITY') {
        let newCitiesArr = state.cities.filter((obj) => {
            return obj.id !== action.city.id
        });
        return {
            ...state,
            cities: newCitiesArr
        }
    } else if (action.type === 'NO_DATA') {
        alert(action.data.message);
        return state
    } else if (action.type === 'CLEAR_DATA') {
        return {
            ...state,
            weather: {}
        }
    }
    return state
};

export default peopleReducer;