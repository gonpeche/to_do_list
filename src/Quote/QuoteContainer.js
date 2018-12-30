import React, { Component } from 'react'
import axios from 'axios'

export default class QuoteContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            frase: ''
        }
    }

    componentDidMount() {
        axios.get('https://api.whatdoestrumpthink.com/api/v1/quotes')
        .then(res => res.data.messages.personalized)
        .then(quotes => {
            let random = quotes[Math.floor(Math.random() * quotes.length)];
            this.setState({ frase: random })
        })
    }
    render() {
        console.log(this.state.frase)
        return (
        <div>
        Trump says:
            {this.state.frase}
        </div>
        )
    }
}
