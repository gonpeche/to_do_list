import React, { Component } from 'react'
import QuoteContainer from './Quote/QuoteContainer';

export default class Main extends Component {
  render() {
    return (
      <div>
        <div>
          <h2> To Do List </h2>
          <input type="text" placeholder="Add task"></input>
        </div>
        
        {
          // <QuoteContainer />
        }
      </div>
    )
  }
}
