import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  SearchWrapper,
  FormWrapper,
  Input,
  SubmitButton,
  ChangeLocation
} from './styles';
import * as actionCreator from '../../store/actionCreators'

class Search extends Component {
  render() {
    return (
      <SearchWrapper>
        <FormWrapper>
          <Input value={this.props.inputValue} onChange={this.props.handleInputChange} />
          <SubmitButton>Search</SubmitButton>
          <ChangeLocation onClick={this.handleGetGeolocation.bind(this)}>Use your location</ChangeLocation>
        </FormWrapper>
      </SearchWrapper>
    )
  }

  handleGetGeolocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.successCallback, this.errorCallback);
    } else {
      alert("Your browser does not support location service");
    }
  }

  successCallback(position) {
    console.log("got ya");
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    console.log("latitude：" + latitude + " longitude：" + longitude);
  }

  errorCallback(error) {
    alert("Can't get your location");
  }
}

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleInputChange(e) {
    const action = actionCreator.inputChange(e.target.value);
    dispatch(action);
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Search);