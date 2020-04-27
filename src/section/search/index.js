import React, { Component } from 'react'
import {
  SearchWrapper, FormWrapper, Input, SubmitButton
} from './styles'

class Search extends Component {
  render() {
    return (
      <SearchWrapper>
        <FormWrapper>
          <Input />
          <SubmitButton>Search</SubmitButton>
        </FormWrapper>
      </SearchWrapper>
    )
  }
}

export default Search