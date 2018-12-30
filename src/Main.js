import React, { Component } from 'react'
import QuoteContainer from './Containers/QuoteContainer';
import InputContainer from './Containers/InputContainer'

export default class Main extends Component {
  render() {
    return (
      <div className="container">
        <InputContainer />
        <QuoteContainer />
      </div>
    )
  }
}
