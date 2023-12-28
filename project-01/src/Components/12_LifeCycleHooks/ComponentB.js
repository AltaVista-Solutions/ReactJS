import React, { Component } from 'react'

export class ComponentB extends Component {
    constructor(props) {
      super(props)
      this.state={name:''}
      console.log('-----Child Constructor-------')
    }
    static getDerivedStateFromProps(props,state)
    {
        console.log('-----Child getDerivedStateFromProps-------')
        return null;
    }
    componentDidMount()
    {
        console.log('-----Child componentDidMount-------')
    }
    shouldComponentUpdate(nextProps,nextState)
    {
        console.log('-----Child shouldComponentUpdate-------')
        return true;
    }
    getSnapshotBeforeUpdate(prevProps,prevState)
    {
        console.log('-----Child getSnapshotBeforeUpdate-------')
        return null;
    }
    componentDidUpdate(prevProps,prevState,snapshot)
    {
        console.log('-----Child componentDidUpdate-------')
    }
  render() {
    console.log('-----Child render-------')
    return (
      <div>
        ComponentB
      </div>
    )
  }
}

export default ComponentB