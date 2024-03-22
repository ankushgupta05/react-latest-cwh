import React, {useEffect} from 'react'



const Navbar = ({color}) => {

    useEffect(() => {
    
        alert("color was changed");

    }, [color])
    

  return (
    <div>
      I am Navbar of {color}  color,   heee hee
    </div>
  )
}

export default Navbar
