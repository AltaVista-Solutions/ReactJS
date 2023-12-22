import React, { Component } from 'react'

export class CRender1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:true
      }
    }
  render() {
    if(this.state.isLoggedIn)
    {
        return(
            <div>
                <h1>Welcome Admin</h1>
            </div>
        )
    }
    else{
        return(
            <div>
                <h1>Welcome Guest</h1>
            </div>
        )
    }
  }
}

export default CRender1