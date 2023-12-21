import React, { Component } from 'react'

export class Employee extends Component {
  render() {
    return (
      <div>
        <h1>Id:{this.props.id}</h1>
        <h1>Name:{this.props.name}</h1>
        <h2>Designation:{this.props.designation}</h2>
        {this.props.children}
      </div>
    )
  }
}

export default Employee