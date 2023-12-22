import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userId:'Guest'
      }
      this.changeUserId=this.changeUserId.bind(this)
    }
    changeUserId(){
        this.setState({userId:'Admin'})
    }
  render() {
    return (
      <div>
        <h1>{this.state.userId}</h1>
        <ChildComponent handler={this.changeUserId}/>
      </div>
    )
  }
}

export default ParentComponent