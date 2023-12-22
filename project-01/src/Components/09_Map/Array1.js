import React from 'react'

function Array1() {
    const courses=['C','C++','Java','SQL','Oracle']
  return (
    <div>
        <ol>
            {
                courses.map((course,i)=>
                    <li key={i}>{course}</li>)
            }
        </ol>
    </div>
  )
}

export default Array1