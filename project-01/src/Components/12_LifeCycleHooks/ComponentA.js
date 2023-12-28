import React, { Component } from 'react'
import ComponentB from './ComponentB'

export class ComponentA extends Component {
    constructor(props) {
      super(props)
      this.state={name:'Guest'}
      console.log('-----Parent Constructor-------')
    }
    static getDerivedStateFromProps(props,state)
    {
        console.log('-----Parent getDerivedStateFromProps-------')
        return null;
    }
    componentDidMount()
    {
        console.log('-----Parent componentDidMount-------')
    }
    shouldComponentUpdate(nextProps,nextState)
    {
        console.log('-----Parent shouldComponentUpdate-------')
        return true;
    }
    getSnapshotBeforeUpdate(prevProps,prevState)
    {
        console.log('-----Parent getSnapshotBeforeUpdate-------')
        return null;
    }
    componentDidUpdate(prevProps,prevState,snapshot)
    {
        console.log('-----Parent componentDidUpdate-------')
    }
    changeName=()=>{
        this.setState({name:'Test'})
    }
  render() {
    console.log('-----Parent render-------')
    return (
      <div>
        ComponentA
        <h1>{this.state.name}</h1>
        <button onClick={this.changeName}>Change Name</button>
        <ComponentB/>
      </div>
    )
  }
}

export default ComponentA