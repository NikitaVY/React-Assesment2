import React, { useState } from 'react';
import WelcomeC from './WelcomeC';

function LoginC() {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [loggedIn, setLoggedIn] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prevDetails => ({
      ...prevDetails,
      [name]: value
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    setLoggedIn(true);
  };

  if (loggedIn) {
    return <WelcomeC username={user.username} />;
  }

  return (
    <div>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <label>Username
          <input type="text" name="username" value={user.username} onChange={handleChange}  />
        </label><br></br>
        <label>Email
          <input type="email" name="email" value={user.email} onChange={handleChange}  />
        </label><br/>
        <label>Password
          <input type="password" name="password" value={user.password} onChange={handleChange}  />
        </label><br></br>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginC;