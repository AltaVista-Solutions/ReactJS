import React from 'react'

const Hoc = (Component) => {
  return (
    class extends React.Component{
        state={
            isloggedinn:true
        }
        render(){
            return(
                <div>
                    {
                        this.state.isloggedinn?<Component/>:
                        <h1>Sorry! You are Not Permitted to View This Component</h1>
                    }
                </div>
            )
        }
    }
  )
}

export default Hoc