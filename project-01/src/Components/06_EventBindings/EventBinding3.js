import React, { Component } from 'react'

export class EventBinding3 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         msg:'Good Evening!'
      }
      this.changeMsg=this.changeMsg.bind(this)
    }
    changeMsg(){
        this.setState({msg:'Good Night!'})
    }
  render() {
    return (
      <div>
        <h1>{this.state.msg}</h1>
        <button onClick={this.changeMsg}>Change Message</button>
      </div>
    )
  }
}

export default EventBinding3