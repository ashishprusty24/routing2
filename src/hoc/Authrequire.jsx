import React from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { Authcontext } from '../context/Authcontext'
const Authrequire = ({children}) => {
    const {isauth} = useContext(Authcontext)
  
    if(isauth){
        return (
             children
        )
     }else{
       return <Navigate to="/login"/>
     }

}

export default Authrequire