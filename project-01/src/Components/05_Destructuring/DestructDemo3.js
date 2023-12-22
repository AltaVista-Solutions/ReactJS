import React, { Component } from 'react'

export class DestructDemo3 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userId:'admin$589',
         role:'Admin'
      }
    }
  render() {
    const{userId,role}=this.state
    return (
      <div>
        <h1>UserId:{userId}</h1>
        <h1>Role:{role}</h1>
      </div>
    )
  }
}

export default DestructDemo3