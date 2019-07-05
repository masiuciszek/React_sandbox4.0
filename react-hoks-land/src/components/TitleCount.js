import React, { useState, useEffect } from 'react';

const TitleCount = () => {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    document.title = `Tou clicked ${count} times`;
  });
  return (
    <div className="container">
      <button onClick={handleCount} type="button">
        Click me
      </button>
    </div>
  );
};

export default TitleCount;
