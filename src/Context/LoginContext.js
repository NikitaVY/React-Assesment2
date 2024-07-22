import React, { useState } from 'react'
import DataContext from './DataContext.js';
import { WelcomeContext } from './WelcomeContext.js';

export default function LoginContext() {
    const [firstName,setFname]=useState("Nikita")
    const [lastName,setLname]=useState("Yadav")
    const [email,setEmail]=useState("nikitavy08@gmail.com")
    const [password,setPass]=useState("Nikita@2001")
  return (
    <DataContext.Provider value={{firstName, lastName, email, password}}>
    <div>
        <WelcomeContext/> 
    </div>
    </DataContext.Provider>
  )
}