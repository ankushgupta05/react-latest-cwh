import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("ankush");
  const [form, setForm] = useState({email : "", phone : ""})

  const handleClick = () => {
    alert("I am handle click");
  };
  const handleMouseOver = () => {
    alert("Hey I am red class and handleMouseOver function");
  };

  const handleChange =(e)=>{
    console.log(e.target.name, e.target.value)
    // setName(e.target.value)
    // console.log(e.target.value)
    setForm({...form, [e.target.name]:e.target.value})  // set hone mai thoda time lagta hai is liye data update hone se pahle niche wala consol run ho jata hai
    console.log(form)
  }
  return (
    <>
      <div>{count}</div>
      <button onClick={() => { setCount(count + 1) }}>count is</button>
      <button onClick={handleClick}>handle click</button>
      {/* <div className="red" onMouseOut={handleMouseOver}>
        I am a red div
      </div> */}
      <div>
        <input type="text"  name="email" value={form.email} onChange={handleChange} />
        <input type="text" name="phone" value={form.phone} onChange={handleChange} />
      </div>
    </>
  );
}

export default App;
