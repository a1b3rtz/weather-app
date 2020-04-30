import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import {
  SearchWrapper,
  FormWrapper,
  Input,
  SubmitButton,
  ChangeLocation
} from './styles';
import * as actionCreator from '../../store/actionCreators'

class Search extends PureComponent {
  render() {
    const { inputValue } = this.props

    return (
      <SearchWrapper>
        <FormWrapper>
          <Input value={inputValue} onChange={this.props.handleInputChange} />
          <SubmitButton>Search</SubmitButton>
          <ChangeLocation onClick={this.props.handleLocationData}>Use your location</ChangeLocation>
        </FormWrapper>
      </SearchWrapper>
    )
  }

  componentDidMount() {
    this.props.handleLocationData();
  }
}

const mapStateToProps = (state) => {
  return {
    inputValue: state.get('inputValue'),
    lat: state.get('latitude'),
    long: state.get('longitude')
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleInputChange(e) {
    const action = actionCreator.inputChange(e.target.value);
    dispatch(action);
  },
  handleLocationData() {
    const action = actionCreator.handleLocation();
    dispatch(action);
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Search);