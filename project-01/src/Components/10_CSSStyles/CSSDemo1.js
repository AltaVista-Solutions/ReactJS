import React from 'react'
import './Styles.css'
import obj from './MyStyles.module.css'

const myStyles={
    color:'orange',
    fontSize:'36px'
}
function CSSDemo1() {
  return (
    <div>
        <h1 className='online'>Sample Text</h1>
        <h1 className='offline'>Sample Text</h1>
        <h1 style={myStyles}>Sample Text</h1>
        <h1 className={obj.online}>Sample Text</h1>
    </div>
  )
}

export default CSSDemo1