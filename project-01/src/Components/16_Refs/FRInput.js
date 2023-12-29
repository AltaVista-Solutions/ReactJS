import React from 'react'

const FRInput=React.forwardRef((props,ref)=> {
  return (
    <div>
        <input type="text" id='txtName' name='txtName'
         ref={ref}/>

    </div>
  )
})

export default FRInput