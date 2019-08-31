import React, { useEffect, useState, useRef } from 'react';
import useInterval from '../hooks/useInterval';

const TimeFun = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount(c => c + 1);
    }, 2600);
  });

  useInterval(() => {
    setCount2(count2 + 1);
  }, 2100);

  return (
    <div>
      <h1>Count1: {count2}</h1>
      <h1>Count2: {count}</h1>
    </div>
  );
};

export default TimeFun;
