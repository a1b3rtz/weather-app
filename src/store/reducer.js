import { fromJS } from 'immutable';

import { CHANGE_INPUT, GET_LOCATION, GET_WEATHER } from './constant';

const defaultState = fromJS({
  inputValue: '',
  location: 'melbourne',
  latitude: '',
  longitude: '',
  data: []
})

export default ((state = defaultState, action) => {
  //修改switch语句
  if(action.type === CHANGE_INPUT) {
    return state.set('inputValue', action.value)
  }
  if(action.type === GET_LOCATION) {
    //修改成单个语句
    return state.set('latitude', action.payload.lat).set('longitude', action.payload.long).set('isGettingLocation', action.status)
  }
  if(action.type === GET_WEATHER) {
    return state.set('data', action.data).set('temp', Math.round(action.temp)).set('location', action.location).set('weather', action.weather).set('icon', action.icon)
  }
  return state
})