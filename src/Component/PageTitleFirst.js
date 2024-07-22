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

  useEffect(() => {
    document.title = D;
  }, [D]);

  const handleChange = (event) => {
    setD(event.target.value);
  };

  return (
    <div>
      <h4>Update Title Only First Time</h4>
      <input type="text" value={D} onChange={handleChange} />
    </div>
  );
};

export default PageTitleFirst;