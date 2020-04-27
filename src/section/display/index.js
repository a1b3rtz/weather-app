import React, { Component } from 'react'
import {
  DisplayWrapper,
  Title,
  Date,
  WeatherIcon,
  Data
} from './style'

class Display extends Component {
  render() {
    return (
      <DisplayWrapper>
        <Title>Weather</Title>
        <Date>April 27th 2020</Date>
        <WeatherIcon />
        <Data>26°C</Data>
        <Data>Melbourne</Data>
        <Data className='detail'>Clear</Data>
      </DisplayWrapper>
    )
  }
}

export default Display