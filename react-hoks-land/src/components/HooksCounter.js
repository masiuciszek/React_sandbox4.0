import React, { useState } from 'react';

const HooksCounter = () => {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
  };
  return (
    <div className="container">
      <h2>Hooks Counter</h2>
      <h3>Count is: {count} </h3>
      <button type="button" onClick={handleCount}>
        Add To count
      </button>
    </div>
  );
};

export default HooksCounter;
