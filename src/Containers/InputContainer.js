import React, { Component } from 'react'
// import s from './Input.css'

export default class InputContainer extends Component {
  render() {
    return (
        <div>
          <h2 className="todotitle"> To Do List </h2>
          <form onSubmit={(e) => this.props.handleSubmit(e)} className="form">
            <input 
              onChange={(e) => this.props.handleChange(e)} 
              className="input" 
              type="text" 
              value={this.props.input}>
            </input>
          </form>
        </div>
    )
  }
}
