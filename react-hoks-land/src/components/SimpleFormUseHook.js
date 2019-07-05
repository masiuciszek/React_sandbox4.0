import React from 'react';
import useFormState from '../hooks/useFormState';

const SimpleFormUseHook = () => {
  const [name, updateName, resetName] = useFormState('');
  const [age, updateAge, resetAge] = useFormState('');

  return (
    <div className="container">
      <h2>React custom hooks form</h2>
      <h4>
        The value is....{name} and your age is ... {age}{' '}
      </h4>
      <input type="text" value={name} onChange={updateName} />
      <button type="submit" onClick={resetName}>
        clear Name
      </button>
      <input type="text" value={age} onChange={updateAge} />
      <button type="submit" onClick={resetAge}>
        clear Age
      </button>
    </div>
  );
};

export default SimpleFormUseHook;
