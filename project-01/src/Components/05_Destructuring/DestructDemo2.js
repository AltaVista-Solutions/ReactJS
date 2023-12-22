import React, { Component } from 'react'

export class DestructDemo2 extends Component {
  render() {
    const{id,name}=this.props
    return (
      <div>
        <h1>Id:{id}</h1>
        <h2>Name:{name}</h2>
      </div>
    )
  }
}

export default DestructDemo2