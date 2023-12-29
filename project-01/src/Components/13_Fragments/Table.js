import React from 'react'
import THead from './THead'
import TBody from './TBody'

function Table() {
  return (
    <div>
        <table border="1">
            <THead/>
            <TBody/>
        </table>
    </div>
  )
}

export default Table