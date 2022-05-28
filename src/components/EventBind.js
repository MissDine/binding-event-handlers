import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message : "How are you?"
      }
    //   this.clickHandler = this.clickHandler.bind(this)
    }
    clickHandler(){
        this.setState({message: "You are beautiful"})
        console.log(this)
    }
  render() {
    return (
      <div>
          <h1>Hello Miss</h1>
          <h2>{this.state.message}</h2>
          {/* <button onClick = {this.clickHandler.bind(this)}>Click me!</button> */}
          <button onClick = {() => this.clickHandler()}>Click me!</button>
          {/* <button onClick = {this.clickHandler}>Click me!</button> */}

      </div>
    )
  }
}

export default EventBind