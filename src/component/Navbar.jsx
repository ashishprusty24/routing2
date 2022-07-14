import React from 'react'
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Authcontext } from '../context/Authcontext'

const Navbar = () => {
    const {isauth,logout} = useContext(Authcontext)
    const navigate = useNavigate()
    const handlelogin  = ()=>{
        if(isauth){
          navigate("/")
          logout()
        }else{
          navigate("/login")
        }
    }

    // if(isauth){
    //     navigate("/feed")
    // }
  return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/feed">Feed</Link>
        <button onClick={handlelogin} > {isauth ? "Logout" : "Login"} </button>
    </div>
  )
}

export default Navbar