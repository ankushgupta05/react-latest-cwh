import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [showbtn, setShowbtn] = useState(false);

  const [todos, setTodos] = useState([
    {
      title: "Hey1",
      desc: "I am good todo1",
    },
    {
      title: "Hey2",
      desc: "I am good todo2",
    },
    {
      title: "Hey3",
      desc: "I am good todo3",
    },
  ]);

  // this is also work
  // const Todo = ({ todo }) => {
  //   return (
  //     <>
  //       <div className="todo">{todo.title}</div>
  //       <div className="todo">{todo.desc}</div>
  //     </>
  //   );
  // };

  return (
    <>
      <div>{count}</div>
      {/*

      //  This is ternery operator
       {showbtn?<button>I will be shown only when second btn is clicked</button>:"thenga"} 
       */}

      {/* below line also work as a ternery oprator */}
      {showbtn && (
        <button>I will be shown only when second btn is clicked</button>
      )}

      {todos.map((todo) => {
        // return < Todo key={todo.title} todo={todo} />

        return (
          <div key={todo.title} style={{ background: "red" }}>
            <div className="todo">{todo.title}</div>
            <div className="todo">{todo.desc}</div>
          </div>
        );
      })}

      <div>
        <button
          onClick={() => {
            setShowbtn(!showbtn);
          }}
        >
          couter
        </button>
      </div>
    </>
  );
}

export default App;
