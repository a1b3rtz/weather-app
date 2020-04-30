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
  if(action.type === CHANGE_INPUT) {
    return state.set('inputValue', action.value)
  }
  if(action.type === GET_LOCATION) {
    return state.set('latitude', action.payload.lat).set('longitude', action.payload.long).set('isGettingLocation', action.status)
  }
  if(action.type === GET_WEATHER) {
    return state.set('data', action.data)
  }
  return state;
})