import {counterContext} from "./context/context"
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <counterContext.Provider  value={{count,setCount}} >  {/* count ki value sabhi components ke adar file ko easy mil jayenga */}

      <div>
        <Navbar/>
      </div>
      
      <div>count of app.jsx is {count}</div>
      <button onClick={()=>{setCount(count + 1)}}>count is app.jsx</button>

    </counterContext.Provider>
    </>
  );
}

export default App;
