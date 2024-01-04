import React from 'react'

function CounterReducer(state=0,action) 
{
   const{type,payload}=action
   switch(type)
   {
     case "increment":
        return state+payload
     case "decrement":
        return state-payload
     default:
        return state
   }
}

export default CounterReducer