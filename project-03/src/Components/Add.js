import React, { Component } from 'react'

export class Add extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       first_name:'',last_name:'',email:''
    }
  }
  changeHandler=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  submitHandler=(e)=>{
    e.preventDefault();
    console.log(this.state)
    fetch('http://localhost:4000/posts',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(this.state)
    }).then(res=>{
      if(res.status==201)
      {
        alert('Product Added Successfully')
        window.location='./'
      }
    })
  }

  render() {
    return (
      <div className='container'>
        <div className='alert alert-success'>
          <h1>Add User</h1>
        </div>
        <div className='container mt-3'>
          <form onSubmit={this.submitHandler}>
              <div className='row'>
                <div className='col'>
                  <input type='text' name="first_name" value={this.state.first_name}
                   onChange={this.changeHandler} placeholder='Enter First Name' className='form-control'/>
                </div>
                <div className='col'>
                  <input type='text' name="last_name" value={this.state.last_name}
                   onChange={this.changeHandler} placeholder='Enter Last Name' className='form-control'/>
                </div>
              </div>
              <div className='row mt-3'>
                <div className='col'>
                  <input type='text' name="email" value={this.state.email}
                   onChange={this.changeHandler} placeholder='Enter E-mail' className='form-control'/>
                </div>
              </div>
              <div className='row mt-3'>
                <div className='col'>
                  <button type="submit" className='btn btn-success'>Add User</button>
                </div>
              </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Add