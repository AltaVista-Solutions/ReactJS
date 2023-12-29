import React from 'react'
import  ReactDOM  from 'react-dom'

function PortalsDemoComponent() {
  return ReactDOM.createPortal(
    <div>
        <h1>This is a sample heading</h1>
    </div>,document.getElementById('test')
  )
}

export default PortalsDemoComponent