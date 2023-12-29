import React, { Component } from 'react'

export class RefDemo extends Component {
    constructor(props) {
      super(props)
    
      this.nameref=React.createRef()
    }
    componentDidMount()
    {
        //console.log(this.nameref.current)
        this.nameref.current.placeholder="Enter Name Here"
        this.nameref.current.focus()
    }
    clickhandler=()=>{
        alert(this.nameref.current.value)
    }
  render() {
    return (
      <div>
        <input type='text' id='txtName' name='txtName'
         ref={this.nameref}/>
         <br/>
         <button onClick={this.clickhandler}>Click Me</button>
      </div>
    )
  }
}

export default RefDemo