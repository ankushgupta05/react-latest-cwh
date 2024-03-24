import React,{ useContext } from 'react'
import { counterContext } from '../context/context'

const Component1 = () => {
  // const counter = useContext(counterContext)
  const value = useContext(counterContext)


  return (
    <div>
    {/* I am components1  { counter} */}
    I am components1  { value.count}
  </div>
  )
}

export default Component1
