import React, { Component } from 'react';
import {
  WeatherWrapper,
  WeatherComponent
} from './styles';
import Search from './section/search';
import Display from './section/display';

class WeatherApp extends Component {
  render() {
    return (
      <WeatherWrapper>
        <WeatherComponent>
        <Search/>
        <Display/>
        </WeatherComponent>
      </WeatherWrapper>
    )
  }
}

export default WeatherApp