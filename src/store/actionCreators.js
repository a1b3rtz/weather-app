import axios from 'axios';

import { CHANGE_INPUT, GET_LOCATION, WEATHER_APK_ID, GET_WEATHER, GET_SUGGESTIONS, CLEAR_SUGGESTIONS } from './constant'

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

export function autoComplete(input) {
  return (dispatch) => {
    axios.get('https://autocomplete.geocoder.ls.hereapi.com/6.2/suggest.json?apiKey=y_z7pGi6sUF0UTtx6wKa5CSu4bF0iao0BykP51xCFUc&query=' + input +'&maxresults=5&resultType=area&country=aus').then((res) => {
      dispatch({
        type: GET_SUGGESTIONS,
        suggestion: res.data.suggestions,
        locationData: res.data
      })
    })
  }
} 

export function getSelectLocation(postalCode, countryCode) {
  return (dispatch) => {
    axios.get(
      'http://api.openweathermap.org/data/2.5/weather?zip=' + postalCode + ',' + countryCode + '&appid=' + WEATHER_APK_ID
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
  }
}

export const clearSuggestions = () => ({
  type: CLEAR_SUGGESTIONS
});
