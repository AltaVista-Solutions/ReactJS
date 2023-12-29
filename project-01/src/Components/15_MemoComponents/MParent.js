import React, { Component } from 'react'
import MChild from './MChild'

export class MParent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'john'
      }
    }
    componentDidMount()
    {
       setInterval(()=>{
        this.setState({name:'john'})
       },2000)
    }
  render() {
    console.log("************Parent***************")
    return (
      <div>
        MParent
        <MChild name={this.state.name}/>
      </div>
    )
  }
}

export default MParent