import React, { Component } from 'react'

export default class CBCEvents extends Component {
    constructor(){
        super();
        this.state={
            name:"Harish"
        }
    }

    changeName(){
        this.setState({name:"Bharath"})
    }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button onClick={this.changeName.bind(this)}>changeName</button>
      </div>
    )
  }
}
