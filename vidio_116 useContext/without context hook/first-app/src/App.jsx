import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Navbar count={count} />
      </div>
      <div>count of app.jsx is {count}</div>
      <button onClick={()=>{setCount(count + 1)}}>count is app.jsx</button>
    </>
  );
}

export default App;
