import React, { Component } from 'react'

export class BasicForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'',mobile:'',city:''
      }
    }
    changeNameHandler=(e)=>{
        //console.log(e.target.value)
        this.setState({name:e.target.value})
    }
    changeMobileHandler=(e)=>{
        //console.log(e.target.value)
        this.setState({mobile:e.target.value})
    }
    changeCityHandler=(e)=>{
        //console.log(e.target.value)
        this.setState({city:e.target.value})
    }
    submitHandler=(e)=>{
        e.preventDefault();
        console.log(this.state)
    }
  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
            Name:<input type="text" defaultValue={this.state.name} onChange={this.changeNameHandler}/>
            <br/>
            Mobile:<input type="text" defaultValue={this.state.mobile} onChange={this.changeMobileHandler}/>
            <br/>
            City:
            <select defaultValue={this.state.city} onChange={this.changeCityHandler}>
                <option value="">--select--</option>
                <option value="HYD">Hyderabad</option>
                <option value="CHN">Chennai</option>
                <option value="MUM">Mumbai</option>
                <option value="DEL">Delhi</option>
            </select>
            <br/>
            <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default BasicForm