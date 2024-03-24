import { useState, useCallback } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);
  const [adjective, setAdjective] = useState("good11");

  /*  // iske waja se component reender ho raha hai is liye callback use karte hai
  const getAdjective = ()=>{
    return "another";
  }
  */

  const getAdjective = useCallback(() => {
    return "another";
  }, []);

  return (
    <>
      <Navbar adjective={"good"} getAdjective={getAdjective} />
      <div>{count}</div>
      <div>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          change me
        </button>
      </div>
    </>
  );
}

export default App;
