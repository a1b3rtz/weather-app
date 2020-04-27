import React, { Component } from 'react';
import { Provider } from 'react-redux'
import {
  WeatherWrapper,
  WeatherComponent
} from './styles';
import Search from './section/search';
import Display from './section/display';
import store from './store';

class WeatherApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <WeatherWrapper>
          <WeatherComponent>
          <Search/>
          <Display/>
          </WeatherComponent>
        </WeatherWrapper>
      </Provider>
    )
  }
}

export default WeatherApp