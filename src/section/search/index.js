import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import * as _ from 'underscore';

import {
  SearchWrapper,
  FormWrapper,
  Input,
  SubmitButton,
  ChangeLocation,
  SuggestTable,
  Row
} from './styles';
import * as actionCreator from '../../store/actionCreators'

class Search extends PureComponent {

  render() {
    const { inputValue, suggestions, handleInputChange, handleWeatherData, handleSelectLocation } = this.props;
  
    return (
      <SearchWrapper>
        <FormWrapper>
          <Input value={inputValue} onChange={handleInputChange} />
          <SubmitButton>SEARCH</SubmitButton>
          <SuggestTable className={suggestions ? '' : 'hide'}>
            {
              suggestions ? 
                suggestions.map((item, index) => {
                  return (<tbody key={index}><Row
                            onClick={() => handleSelectLocation(item)}
                          ><td>
                            {item.label.slice(10)}
                          </td></Row></tbody>)
                }) : <tbody><tr><td></td></tr></tbody>
            }
          </SuggestTable>
          <ChangeLocation onClick={handleWeatherData}>Use your location</ChangeLocation>
        </FormWrapper>
      </SearchWrapper>
    )
  }

  componentDidMount() {
    this.props.handleWeatherData();
  }
}

const mapStateToProps = (state) => {
  return {
    inputValue: state.get('inputValue'),
    lat: state.get('latitude'),
    long: state.get('longitude'),
    suggestions: state.get('suggestion'),
    display: state.get('display')
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleInputChange(e) {
    const input = e.target.value
    const action = actionCreator.inputChange(input);
    dispatch(action);

    const autoCompleteAction = actionCreator.autoComplete(input);
    dispatch(autoCompleteAction);
  },

  handleWeatherData() {
    const action = actionCreator.handleWeather();
    dispatch(action);
  },

  handleSelectLocation(item) {
    const countryCode = item.countryCode.slice(0, 2).toLowerCase();
    const postalCode = item.address.postalCode;

    const action = actionCreator.getSelectLocation(postalCode, countryCode);
    dispatch(action);
    
    const clearInputAction = actionCreator.inputChange('');
    dispatch(clearInputAction);

    const clearSuggestionsAction = actionCreator.clearSuggestions();
    dispatch(clearSuggestionsAction);
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Search);