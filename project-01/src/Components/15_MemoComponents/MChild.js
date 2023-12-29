import React from 'react'

function MChild(props) {
    console.log("************Child***************")
  return (
    <div>
        MChild
        <h1>Name:{props.name}</h1>
    </div>
  )
}

export default React.memo(MChild)