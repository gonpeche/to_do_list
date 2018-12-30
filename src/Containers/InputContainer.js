import React, { Component } from 'react'
// import s from './Input.css'

export default class InputContainer extends Component {
  render() {
    return (
        <div>
          <h2> To Do List </h2>
          <input type="text" placeholder="Add task"></input>
        </div>
    )
  }
}
