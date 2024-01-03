import React, { Component } from 'react'

export class Delete extends Component {
  componentDidMount()
  {
    const id=window.location.pathname.split('/')[2]
    //alert(id)
    fetch('http://localhost:4000/posts/'+id,
    {
      method:'DELETE'
    })
    .then(res=>{
      if(res.status==200)
      {
        alert('Record Deleted Successfully')
        window.location='../'
      }
    })
  }
  render() {
    return (
      <div>Delete</div>
    )
  }
}

export default Delete