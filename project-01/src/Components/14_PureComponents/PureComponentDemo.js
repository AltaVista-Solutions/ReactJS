import React, { Component, PureComponent } from 'react'

export class PureComponentDemo extends PureComponent {
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
    console.log('**************Pure Component****************')
    return (
      <div>PureComponent</div>
    )
  }
}

export default PureComponentDemo