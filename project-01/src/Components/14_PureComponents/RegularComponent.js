import React, { Component } from 'react'

export class RegularComponent extends Component {
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
    console.log('**************Regular Component****************')
    return (
      <div>RegularComponent</div>
    )
  }
}

export default RegularComponent