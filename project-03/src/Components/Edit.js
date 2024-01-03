import React, { Component } from 'react'

export class Edit extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       id:0,first_name:'',last_name:'',email:''
    }
  }
  componentDidMount()
  {
    const id=window.location.pathname.split('/')[2]
    //alert(id)
    fetch('http://localhost:4000/posts/'+id)
    .then(result=>{return result.json()})
    .then(res=>{
      console.log(res)
      var user=res
      this.setState({
        id:user['id'],
        first_name:user['first_name'],
        last_name:user['last_name'],
        email:user['email']
      })     
    })
  }
  changeHandler=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  submitHandler=(e)=>{
    e.preventDefault();
    console.log(this.state)
    fetch('http://localhost:4000/posts/'+this.state.id,{
      method:'PUT',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(this.state)
    }).then(res=>{
      if(res.status==200)
      {
        alert('Product Data Updated Successfully')
        window.location='../'
      }
    })
  }

  render() {
    return (
      <div className='container'>
        <div className='alert alert-success'>
          <h1>Edit User</h1>
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
                  <button type="submit" className='btn btn-success'>Update User</button>
                </div>
              </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Edit