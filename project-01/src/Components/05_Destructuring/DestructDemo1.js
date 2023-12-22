import React from 'react'

function DestructDemo1(props) {
    const{id,name}=props
  return (
    <div>
        <h1>Id:{id}</h1>
        <h2>Name:{name}</h2>
    </div>
  )
}

export default DestructDemo1