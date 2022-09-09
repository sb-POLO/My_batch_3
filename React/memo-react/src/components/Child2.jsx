import React from 'react'
import ChildHOC from './ChildHOC';

function Child2() {
  return (
    <div>Child2</div>
  )
}

export default ChildHOC(Child2)