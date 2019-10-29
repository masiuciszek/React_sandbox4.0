import React from 'react';
import PropTypes from 'prop-types';

const unitCalculation = (unit, weight, selectedUnit) => {
  switch (selectedUnit) {
    case 'kg':
      if (unit === 'lbs') return weight / 0.45359237;
      if (unit === 'oz') return weight / 0.02834952;
      if (unit === 'g') return weight + 1000;
      return;
    case 'oz':
      if (unit === 'lbs') return weight / 16;
      if (unit === 'kg') return weight * 0.02834952;
      if (unit === 'g') return weight * 28.34952;
      return;
    case 'lbs':
      if (unit === 'kg') return weight * 0.02834952;
      if (unit === 'oz') return weight * 16;
      if (unit === 'g') return weight * 453.59237;
      return;
    case 'g':
      if (unit === 'kg') return weight / 1000;
      if (unit === 'oz') return weight / 28.34952;
      if (unit === 'lbs') return weight / 453.59237;

    // eslint-disable-next-line no-fallthrough
    default:
      return unit;
  }
};

const UnitResult = ({ units, weight, selectedUnit }) => (
  <div className="unit">
    {units.map(unit => (
      <>
        {unit === selectedUnit ? (
          ''
        ) : (
          <h3>
            {unitCalculation(unit, weight, selectedUnit)} {unit}{' '}
          </h3>
        )}
      </>
    ))}
  </div>
);

UnitResult.propTypes = {
  units: PropTypes.array.isRequired,
  weight: PropTypes.number.isRequired,
  selectedUnit: PropTypes.string.isRequired,
};

export default UnitResult;
