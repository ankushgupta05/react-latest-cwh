import { useState , useEffect} from "react";
import "./App.css";

import Navbar from './components/Navbar'

function App() {

  const [count, setCount] = useState(0)
  const [first, setFirst] = useState(0)

  useEffect(() => {
    alert("This Hook is Always run")
  
  })

  useEffect(() => {
    alert("This Hook is run only when page reload")

    return()=>{
      alert("component was unmounted") //NTE :-  jab koi bhi state defind hai par declare nahi hai to ye run ho jayenga
    }
  }, [])
  
  useEffect(() => {
    alert("This Hook is run when  count was changed")
    
  }, [count])
  
  useEffect(() => {
    alert("This Hook is run when  First was changed")
  
  }, [first])
  

  return (
    <>
    <Navbar color={"red" + "blue"}/>

    <div>the count value is {count}</div>
    <button onClick={()=>{setCount(count + 1)}}>Update count</button>
    </>
  );
} 

export default App;
