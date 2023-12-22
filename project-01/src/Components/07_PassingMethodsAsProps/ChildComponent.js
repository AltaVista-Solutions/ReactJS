import React from 'react'

function ChildComponent(props) {
  return (
    <div>
        <button onClick={props.handler}>Change UserId</button>
    </div>
  )
}

export default ChildComponent