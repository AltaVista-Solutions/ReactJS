import React, { Component } from 'react'

export class CRender2 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:true
      }
    }
  render() {
    let userid
    if(this.state.isLoggedIn){
        userid="Admin"
    }
    else{
        userid="Guest"
    }
    return(
        <div>
            <h1>Welcome {userid}</h1>
        </div>
    )
  }
}

export default CRender2