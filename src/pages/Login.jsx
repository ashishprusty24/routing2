import React from "react";
import { useState } from "react";
import { Authcontext } from "../context/Authcontext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const navigate = useNavigate()
    const { isauth } = useContext(Authcontext)
    const [data,setdata] = useState({})
 const {login} = useContext(Authcontext)
    const handlechange = (e)=>{
        const {name,value} = e.target

        setdata({
            ...data,
            [name]:value
        })
    }

    const handlesubmit = (e)=>{
  e.preventDefault()
  login()
  navigate("/feed")
    }

 
  return (
    <div >
        <form onSubmit={handlesubmit}
         style={{
        display : "flex",
        flexDirection : "column",
        gap:"10px",
        maxWidth : "200px",
        margin : "auto"
    }}>
      <input name="email" type="text" placeholder="Enter email"></input>
      <input  name="password" type="password" placeholder="Enter password"></input>
      <input type="submit" value="submit"></input>
      
      </form>
    </div>
  );
};

export default Login;
