import React, { Component } from 'react'
import {quotes} from '../Utils/trump'

export default class QuoteContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            frase: quotes
        }
    }

    componentDidMount() {
        let quotes = this.state.frase
        let quote = quotes[Math.floor(Math.random()*quotes.length)];
        this.setState({ frase: quote})
    }
    render() {
        return (
        <div>
            {this.state.frase}
        </div>
        )
    }
}
