import React from 'react'

function Array2() {
    const courseList=[
        {id:1,title:'C',duration:'30 Days'},
        {id:2,title:'C++',duration:'30 Days'},
        {id:3,title:'Java',duration:'45 Days'},
        {id:4,title:'React',duration:'30 Days'},
        {id:5,title:'Angular',duration:'30 Days'},
    ]
  return (
    <div className='container mt-5'>
        <table className='table table-bordered table-hover'>
            <thead>
                <tr className='table-success'>
                    <th>Id</th>
                    <th>Course Title</th>
                    <th>Duration</th>
                </tr>
            </thead>
            <tbody>
                {
                    courseList.map((course,i)=>
                    <tr key={i}>
                       <td>{course.id}</td> 
                       <td>{course.title}</td>
                       <td>{course.duration}</td>
                    </tr>)
                }
            </tbody>
        </table>
    </div>
  )
}

export default Array2