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
    this.remove = this.remove.bind(this)
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

  remove(e) {
    let todos = [... this.state.list]
    todos.splice(e,1)
    this.setState({
      list: [... todos]
    })

  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <InputContainer 
            input={this.state.input}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange} />
          <TodoContainer 
            remove={this.remove}
            list={this.state.list}/>
        </div>
        <img src="https://vignette.wikia.nocookie.net/pseudociencia/images/8/82/Donald_Trump.png/revision/latest?cb=20171216201859&path-prefix=es" alt="Smiley face" height="150" width="150"></img>
        <div className="speech-bubble-ds">
          <QuoteContainer />
          <div className="speech-bubble-ds-arrow"></div>
        </div>
      </React.Fragment>
    )
  }
}
