// @ts-nocheck
import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

const TempCalculator = () => {
  const [temp, setTemp] = useState('');
  const [temp2, setTemp2] = useState('');
  const [temp3, setTemp3] = useState('');

  const handleCelsius = e => {
    const { value } = e.target;
    if (e.target.value.match(/^[0-9]*$/)) {
      setTemp(parseInt(value || 0));
    }
  };
  const handleFahrenheit = e => {
    const { value } = e.target;
    if (e.target.value.match(/^[0-9]*$/)) {
      setTemp2(parseInt(value || 0));
    }
  };
  const handleKelvin = e => {
    if (e.target.value.match(/^[0-9]*$/)) {
      const { value } = e.target;
      setTemp3(parseInt(value || 0));
    }
  };

  const cToF = () => temp * 1.8 + 32;
  const cToK = () => temp + 273.15;

  const FToC = () => ((temp2 - 32) * 5) / 9;
  const FToK = () => temp2 + (459.67 * 5) / 9;

  const kToC = () => temp3 - 273.15;
  const kToF = () => (temp3 * 9) / 5 - 459.67;

  return (
    <div className="container">
      <div className="celsius f-group">
        <input
          type="text"
          onChange={handleCelsius}
          value={temp || ''}
          disabled={temp2 >= 1 || temp3 >= 1}
        />
        <h1>
          C {temp || ''} {(temp2 && FToC()) || ''} {(temp3 && kToC()) || ''}
        </h1>
      </div>

      <div className="fahrenheit f-group">
        <input
          type="text"
          onChange={handleFahrenheit}
          value={temp2 || ''}
          disabled={temp >= 1 || temp3 >= 1}
        />
        <h1>
          F {temp2 || ''} {(temp && cToF()) || ''} {(temp3 && kToF()) || ''}{' '}
        </h1>
      </div>

      <div className="kelvin f-group">
        <input
          type="text"
          onChange={handleKelvin}
          value={temp3 || ''}
          disabled={temp >= 1 || temp2 >= 1}
        />
        <h1>
          {' '}
          K {temp3 || ''} {(temp && cToK()) || ''} {(temp2 && FToK()) || ''}{' '}
        </h1>
      </div>
    </div>
  );
};

TempCalculator.propTypes = {};

export default TempCalculator;
