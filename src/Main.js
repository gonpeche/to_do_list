import React, { Component } from 'react'
import QuoteContainer from './Containers/QuoteContainer';
import InputContainer from './Containers/InputContainer'
import TodoContainer from './Containers/TodoContainer';

export default class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      input: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    e.preventDefault()
    this.setState({
      input: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.setState({ 
      list: [...this.state.list, this.state.input],
      input: ''
    })
  }

  render() {
    return (
      <div className="container">
        <InputContainer 
          input={this.state.input}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange} />
        <TodoContainer 
          list={this.state.list}/>
        {
          // <QuoteContainer />
        }
      </div>
    )
  }
}
