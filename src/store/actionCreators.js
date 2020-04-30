import { CHANGE_INPUT, GET_LOCATION, WEATHER_APK_ID, GET_WEATHER } from './constant'
import axios from 'axios';

export const inputChange = (value) => ({
  type: CHANGE_INPUT,
  value
})

export function handleLocation() {
  return dispatch => {
      const geolocation = navigator.geolocation;
      geolocation.getCurrentPosition((position) => {
          dispatch({
              type: GET_LOCATION,
              payload: {
                lat: position.coords.latitude,
                long: position.coords.longitude
              }
          });
      });
  };
}

export const getLocalWeather = (lat, long) => {
  return dispatch => {
    axios.get(
      'http://api.openweathermap.org/data/2.5/weather?lat=' + lat  + '&lon=' + long + '&appid=' + WEATHER_APK_ID
    ).then((res) => {
      dispatch({
        type: GET_WEATHER,
        data: res.data
      });
    })
  }
}