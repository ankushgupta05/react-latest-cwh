import { useState , useRef, useEffect} from "react";
import "./App.css";

function App() {

  const [count, setCount] = useState(0)
  const btnref = useRef();

  useEffect(() => {
    console.log("First Rerendering.....")
    btnref.current.style.backgroundColor = "red"
  }, [])
  

  return (
    <>

    <div>the count value is {count}</div>
    <button ref={btnref} onClick={()=>{setCount(count + 1)}}>Update count</button>
    <button onClick={()=>{btnref.current.style.display = "none"}}>Change me</button>

    </>
  );
} 

export default App;
