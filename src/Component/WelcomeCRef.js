import React from 'react';

function WelcomeCRef({ userDetails }) {
  return (
    <div>
      <h1>Welcome, {userDetails.username}!</h1>
      <p>Email : {userDetails.email}</p>
      <p>Password : {userDetails.password}</p>
    </div>
  );
}

export default WelcomeCRef;