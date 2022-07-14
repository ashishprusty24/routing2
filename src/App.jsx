import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Feed from "./pages/Feed";
import Login from "./pages/Login";
import Navbar from "./component/Navbar";
import Authrequire from "./hoc/Authrequire";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element = {<Home/>}></Route>
        <Route path="/feed"  element = {
          <Authrequire>
        <Feed/>
        </Authrequire>
        }></Route>
        <Route path="/login"  element = {<Login/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
