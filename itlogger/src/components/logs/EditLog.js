import React from 'react';
import PropTypes from 'prop-types';

const EditLog = ({ toggleEditLog }) => {
  let a;
  return (
    <div>
      <h1>EditLog</h1>
    </div>
  );
};

EditLog.propTypes = {
  toggleEditLog: PropTypes.func.isRequired,
};
export default EditLog;
