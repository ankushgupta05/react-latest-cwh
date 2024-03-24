import React from 'react'

import { memo } from 'react'  // memo rokta hai component ko rerender hone se  jab props change hota tab rerender honga

const Navbar = ({adjective, getAdjective}) => {
  console.log(" Navbar is render")
  return (
    <div>
      I am {adjective} Navbar
      <button onClick={()=>{getAdjective()}}>nav change me</button>
    </div>
  )
}

export default memo(Navbar);
