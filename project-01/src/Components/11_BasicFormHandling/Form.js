import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'',mobile:'',city:''
      }
    }

    changeHandler=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    submitHandler=(e)=>{
        e.preventDefault();
        console.log(this.state)
    }
  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
            Name:<input type="text" defaultValue={this.state.name} 
            name="name" onChange={this.changeHandler}/>
            <br/>
            Mobile:<input type="text" defaultValue={this.state.mobile}
            name="mobile" onChange={this.changeHandler}/>
            <br/>
            City:<input type="text" defaultValue={this.state.city}
            name="city" onChange={this.changeHandler}/>
            <br/>
            <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default Form