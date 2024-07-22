import React, { useState } from 'react';

const TitlePageOnChange = () => {
  const [D, setD] = useState('');
  
  const handleButtonClick = () => {
    document.title = D;
  };

  const handleChange = (event) => {
    setD(event.target.value);
  };

  return (
    <div>
      <h4>Change Document Title</h4>
      <input type="text" value={D} onChange={handleChange} placeholder="Enter new title for document"/><br></br>
      <button onClick={handleButtonClick}>Change Title</button>
    </div>
  );
};

export default TitlePageOnChange;