const SET_USER_LOCATION = 'SET_USER_LOCATION';
const SET_WEATHER_DATA = 'SET_WEATHER_DATA';
const CHANGE_TEMP='CHANGE_TEMP';




let initialState = {
    userLocation: {
        long: 0,
        lat: 0
    },
    city: '',
    temperature: 0,
    icon: ''

}

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_LOCATION:
            return {
                ...state,
                userLocation: action.userLocation
            }
        case SET_WEATHER_DATA:
            return {
                ...state,
                icon: action.icon,
                temperature: action.temperature,
                city:action.city

            }
        case CHANGE_TEMP:
            return{
                ...state,
                temperature: action.newTemperature

            }
            default:
            return state;
    }

}

export const setUserLocation = (userLocation) => ({type: SET_USER_LOCATION, userLocation});
export const setWeatherData = (icon, temperature, city) => ({type: SET_WEATHER_DATA, icon, temperature, city});
export const setNewTemperature = (newTemperature) => ({type: CHANGE_TEMP, newTemperature});



export const getWeatherData = () => async (dispatch) => {
    navigator.geolocation.getCurrentPosition(async (position) => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        dispatch(setUserLocation({lat, long}))
        const protectionAPI = '2aea7457683524468f';
        const data = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=0e43ba82fc9cae${protectionAPI}`)
        const json = await data.json();
        //const icon=`http://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png`
        dispatch(setWeatherData(`http://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png`,
            json.main.temp-273.15,
            json.name
        ));
    });
}

export default weatherReducer;
