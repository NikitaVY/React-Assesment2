import React, { useState, useEffect } from 'react';

const PageTitleEvery = () => {
  const [D, setD] = useState('');

  useEffect(() => {
    document.title = D;
  }); 

  const handleChange = (event) => {
    setD(event.target.value);
  };

  return (
    <div>
      <h4>Update Title Every Render</h4>
      <input type="text" value={D} onChange={handleChange} placeholder="Enter the title" />
    </div>
  );
};

export default PageTitleEvery;