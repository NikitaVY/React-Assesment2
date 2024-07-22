import React, { useContext } from 'react'
import DataContext from './DataContext.js'

export const WelcomeContext = () => {

    const {firstName, lastName, email, password} =useContext(DataContext);
  return (
    <div>
        <h2>Using Context</h2>
        <p>First Name:{firstName}</p>
        <p>Last Name:{lastName}</p>
        <p>Email:{email}</p>
        <p>Password:{password}</p>
    </div>
  )
}