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
    <div class="form4">
      <h4>Change Document Title</h4>
      <input type="text" value={D} onChange={handleChange} placeholder="Enter new title for document"/>
      <button onClick={handleButtonClick}>Change Title</button>
      <br></br>
    </div>
  );
};

export default TitlePageOnChange;