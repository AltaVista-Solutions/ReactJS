import React from 'react'
import {connect} from 'react-redux'
import {incAction,decAction} from './Actions'

function ReduxDemo(props) {
  return (
    <div>
        <h1>{props.counter}</h1>
        <button onClick={()=>props.decAction(5)}>Decrement</button>
        <button onClick={()=>props.incAction(5)}>Increment</button>
    </div>
  )
}

const mapStateToProps=state=>({
    counter:state
})
export default connect(mapStateToProps,{incAction,decAction}) (ReduxDemo)