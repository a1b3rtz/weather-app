import { fromJS } from 'immutable';

import { CHANGE_INPUT, GET_LOCATION, GET_WEATHER, GET_SUGGESTIONS, CLEAR_SUGGESTIONS } from './constant';

const defaultState = fromJS({
  inputValue: '',
  location: 'melbourne',
  latitude: '',
  longitude: '',
  data: [],
  suggestion: [],
  locationData: []
})

export default ((state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_INPUT:
      return state.set('inputValue', action.value)
    case GET_LOCATION:
      return state.set('latitude', action.payload.lat).set('longitude', action.payload.long).set('isGettingLocation', action.status)
    case GET_WEATHER:
    return state.set('data', action.data).set('temp', Math.round(action.temp)).set('location', action.location).set('weather', action.weather).set('icon', action.icon)
    case GET_SUGGESTIONS:
      return state.set('suggestion', action.suggestion).set('locationData', action.locationData)
    case CLEAR_SUGGESTIONS:
    return state.set('suggestion', [])
    default: 
      return state
  }
})