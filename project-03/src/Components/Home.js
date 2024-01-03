import React, { Component } from 'react'

export class Home extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       users:[]
    }
  }
  componentDidMount()
  {
     fetch('http://localhost:4000/posts')
     .then(result=>{return result.json()})
     .then(res=>{
      console.log(res)
      this.setState({users:res})
     })
  }
  render() {
    const {users}=this.state
    return (
      <div className='container'>
        <div className='alert alert-success'>
          <h1>User Data</h1>
        </div>
        <div className='container mt-3'>
          <div className='container mt-3'>
          <a href={`/add`} className='btn btn-success'>Add User</a>
          </div>
          <table className='mt-3 table table-responsive table-bordered table-hover'>
            <thead>
              <tr className='table-success'>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                users.length?users.map((x,i)=>
                  <tr key={i}>
                    <td>{x.id}</td>
                    <td>{x.first_name} {x.last_name}</td>
                    <td>{x.email}</td>
                    <td>
                      <a href={`/edit/${x.id}`} className='btn btn-warning'>Edit</a>
                    &nbsp;
                      <a href={`/delete/${x.id}`} className='btn btn-danger'>Delete</a>
                    </td>
                  </tr>):null
              }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Home