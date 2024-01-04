import React,{useState} from 'react'


function Demo(props) {
    const[counter,setCounter]=useState(0)
    function clickHandler(){
        setCounter(counter+1)
    }
  return (
    <div>
        <h1>Hello User</h1>
        <h1>{props.name}</h1>
        <h1>{counter}</h1>
        <button onClick={clickHandler}>Increment</button>
    </div>
  )
}

export default Demo