import { useState } from "react";
import { createContext } from "react";

export const Authcontext = createContext();

export const Authcontextprovider = ({ children }) => {
    const [isauth,setauth] = useState(false)

   const login = ()=>{
   setauth(true)
   }
   const logout  = ()=>{
   setauth(false)
   }
  return <Authcontext.Provider value={{isauth,login,logout}} >{children}</Authcontext.Provider>;
};
