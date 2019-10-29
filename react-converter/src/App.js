// @ts-nocheck
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { setState } from 'expect/build/jestMatchersObject';
import UnitResult from './UnitResult';
import './App.css';

const App = () => {
  const [weight, setWeight] = useState('');
  const [selectedUnit, setSelectedUnit] = useState('');
  const [units, setUnits] = useState(['lbs', 'kg', 'g', 'oz']);

  const handleText = e => {
    if (e.target.value.match(/^[0-9]*$/)) {
      setWeight(e.target.value);
    }
  };

  return (
    <div className="App">
      <div className="input-Wrapper">
        <div className="form-control input-wrap">
          <input
            type="text"
            name="weight"
            value={weight}
            onChange={handleText}
            placeholder="enter a value"
          />
        </div>
        <div className="form-control select-wrap">
          <select
            name="units"
            value={selectedUnit}
            id="units"
            onChange={e => setSelectedUnit(e.target.value)}
          >
            <option disabled>Choose your unit</option>

            {units.map((unit, i) => (
              <option key={i} value={unit}>
                {unit}
              </option>
            ))}
          </select>
        </div>
      </div>
      {weight !== '' && (
        <div className="units-output">
          {' '}
          <UnitResult
            units={units}
            selectedUnit={selectedUnit}
            weight={parseInt(weight)}
          />{' '}
        </div>
      )}
    </div>
  );
};

App.propTypes = {};

export default App;
