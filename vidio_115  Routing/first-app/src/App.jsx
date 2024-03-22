import "./App.css";

import {createBrowserRouter, RouterProvider} from 'react-router-dom'


import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import About from "./components/About";
import User from "./components/User";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<> <Navbar /> <Home /></>,
    },
    {
      path: "/login",
      element:<> <Navbar /> <Login /></>,
    },
    {
      path: "/about",
      element:<> <Navbar /> <About /></>,
    },
    {
      path: "/user/:username",
      element:<> <Navbar /> <User /></>,
    },
  ]);

  return (
    <>
      
      <RouterProvider router={router} />
    </>
  );
}

export default App;

/* install 

npm i react-router-dom


*/

/* 
react router  

source 'https://reactrouter.com/en/main'
*/
