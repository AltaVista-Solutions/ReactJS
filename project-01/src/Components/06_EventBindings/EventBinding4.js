import React, { Component } from 'react'

export class EventBinding4 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         msg:'Good Evening!'
      }
    }
    changeMsg(){
        this.setState({msg:'Good Night!'})
    }
  render() {
    return (
      <div>
        <h1>{this.state.msg}</h1>
        <button onClick={this.changeMsg.bind(this)}>Change Message</button>
      </div>
    )
  }
}

export default EventBinding4