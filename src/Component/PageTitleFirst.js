import React, { useState, useEffect } from 'react';

const PageTitleFirst = () => {
  const [D, setD] = useState('');
  const [titleSet, setTitleSet] = useState(true);

  useEffect(() => {
    if (!titleSet) {
      document.title = D;
      setTitleSet(false);
    }
  },[titleSet, D]); 

  const handleButtonClick = () => {
    document.title = D;
  };
  const handleChange = (event) => {
    setD(event.target.value);
  };

  return (
    <div class="form4">
      <h4>Update Title Only First Time</h4>
      <input type="text" value={D} onChange={handleChange} />
      <button onClick={handleButtonClick}>Update</button>
    </div>
  );
};

export default PageTitleFirst;