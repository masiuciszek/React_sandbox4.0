import React, { useState } from 'react';

const HookForm = () => {
  const [name, setName] = useState('');

  const handleChange = e => {
    setName(e.target.value);
  };

  const handleClick = () => {
    setName('');
  };
  return (
    <div className="container">
      <h2>React hooks form</h2>
      <h4>The value is....{name} </h4>
      <input type="text" value={name} onChange={handleChange} />
      <button type="submit" onClick={handleClick}>
        clear
      </button>
    </div>
  );
};

export default HookForm;
