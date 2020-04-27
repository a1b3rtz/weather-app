import { fromJS } from 'immutable';

import { CHANGE_INPUT } from './constant';

const defaultState = fromJS({
  inputValue: '',
  location: 'melbourne'
})

export default ((state = defaultState, action) => {
  if(action.type === CHANGE_INPUT) {
    return state.set('inputValue', action.value)
  }
  return state;
})