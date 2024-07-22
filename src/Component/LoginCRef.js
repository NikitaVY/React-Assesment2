
import React, { useRef, useState } from 'react';
import WelcomeCRef from './WelcomeCRef';

const LoginCRef = () => {
  const usernameRef = useRef('');
  const emailRef = useRef('');
  const passwordRef = useRef('');

  const [userDetails, setUserDetails] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const details = {
      username: usernameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    setUserDetails(details);
  };

  return (
    <div>
      {userDetails === null ? (
        <form onSubmit={handleSubmit}>
          <div>
            <h2>Using ref</h2>
            <label>Username:</label>
            <input type="text" ref={usernameRef} />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" ref={emailRef} />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" ref={passwordRef} />
          </div>
          <button type="submit">Login</button>
        </form>
      ) : (
        <WelcomeCRef userDetails={userDetails}/>
      )}
    </div>
  );
}

export default LoginCRef;