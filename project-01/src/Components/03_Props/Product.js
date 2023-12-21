import React from 'react'

function Product(props) {
  return (
    <div>
        <h1>Id:{props.id}</h1>
        <h1>Name:{props.name}</h1>
        <h2>Price:{props.price}</h2>
        {props.children}
    </div>
  )
}

export default Product