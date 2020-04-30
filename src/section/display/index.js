import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import {
  DisplayWrapper,
  Title,
  Date,
  WeatherIcon,
  Data
} from './style';

class Display extends PureComponent {
  render() {
    const date = moment().format('MMMM Do YYYY');
    const weatherIcon = {
      backgroundImage: "url(http://openweathermap.org/img/wn/" + this.props.icon + "@2x.png)",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }
    return (
      <DisplayWrapper>
        <Title>How's the Weather</Title>
        <Date>{date}</Date>
        <WeatherIcon style={weatherIcon}/>
        <Data>{this.props.temp}°C</Data>
        <Data>{this.props.location}</Data>
        <Data className='detail'>{this.props.weather}</Data>
      </DisplayWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  temp: state.get('temp'),
  location: state.get('location'),
  weather: state.get('weather'),
  data: state.get('data'),
  icon: state.get('icon')
})

const mapDispatchToProps = (dispatch) => {

}

export default connect(mapStateToProps, mapDispatchToProps)(Display)