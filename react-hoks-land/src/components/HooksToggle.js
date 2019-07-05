import React, { useState } from 'react';
import useToggle from '../hooks/useToggle';

const HooksToggle = () => {
  const [isHappy, toggleIsHappy] = useToggle(true);
  const [banana, toggleBanana] = useToggle(false);

  return (
    <div className="container">
      <h2>React Hooks Toggle</h2>
      <h3>Today I am : {isHappy ? ' 😄' : '😭'} </h3>
      <button type="button" onClick={toggleIsHappy}>
        Toggle Title above {'↑'}{' '}
      </button>
      <h3>Hello I love : {banana ? 'Bananas 🍌' : ' Cherries  🍒 '} </h3>
      <button type="button" onClick={toggleBanana}>
        Toggle Title above {'↑'}{' '}
      </button>
    </div>
  );
};
// const HooksToggle = () => {
//   const [on, setOn] = useState(false);
//   const handleToggle = () => {
//     setOn(on => !on);
//   };
//   return (
//     <div className="container">
//       <h2>React Hooks Toggle</h2>
//       <h3>Hello love : {on ? 'Bananas 🍌' : ' Cherries  🍒 '} </h3>
//       <button type="button" onClick={handleToggle}>
//         Toggle Title above {'↑'}{' '}
//       </button>
//     </div>
//   );
// };

export default HooksToggle;
