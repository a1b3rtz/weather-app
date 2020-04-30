import axios from 'axios';

import { CHANGE_INPUT, GET_LOCATION, WEATHER_APK_ID, GET_WEATHER } from './constant'

export const inputChange = (value) => ({
  type: CHANGE_INPUT,
  value
});

export function handleWeather() {
  return (dispatch) => {
    const geolocation = navigator.geolocation;
    geolocation.getCurrentPosition((position) => {
      dispatch({
        type: GET_LOCATION,
        payload: {
          lat: position.coords.latitude,
          long: position.coords.longitude
        }
      });
      return axios.get(
        'http://api.openweathermap.org/data/2.5/weather?lat=' + position.coords.latitude  + '&lon=' + position.coords.longitude + '&appid=' + WEATHER_APK_ID
      ).then((res) => {
        dispatch({
          type: GET_WEATHER,
          data: res.data,
          temp: res.data.main.temp - 273.15,
          location: res.data.name,
          weather: res.data.weather[0].description,
          icon: res.data.weather[0].icon
        });
      });
    });
  };
};
