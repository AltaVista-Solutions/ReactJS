import React, { useState } from 'react'

function StateDemo1() {
    const[userId,setuserId]=useState('Guest')
    function changeUserID()
    {
        setuserId('Admin')
    }
  return (
    <div>
        <h1>Welcome,{userId}</h1>
        <button onClick={changeUserID}>Change UserId</button>
    </div>
  )
}

export default StateDemo1