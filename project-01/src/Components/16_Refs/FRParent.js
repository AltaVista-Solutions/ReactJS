import React, { Component } from 'react'
import FRInput from './FRInput'

export class FRParent extends Component {
    constructor(props) {
      super(props)
      this.nameref=React.createRef()
    }
    componentDidMount()
    {
        this.nameref.current.placeholder="Enter Name Here"
    }
    clickHandler=()=>{
        alert(this.nameref.current.value)
    }
  render() {
    return (
      <div>
        <FRInput ref={this.nameref}/>
        <button onClick={this.clickHandler}>Click Me</button>
      </div>
    )
  }
}

export default FRParent