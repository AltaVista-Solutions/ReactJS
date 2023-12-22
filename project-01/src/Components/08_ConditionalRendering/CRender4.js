import React, { Component } from 'react'

export class CRender4 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:true
      }
    }
  render() {
   return(
    this.state.isLoggedIn &&
    <div>
        <h1>Welcome Admin</h1>
    </div>
   )
  }
}

export default CRender4