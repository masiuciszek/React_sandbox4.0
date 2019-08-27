/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { LogContext } from '../../context/logs/logs.state';

function Logs() {
  const { getLogs, logs, loading } = useContext(LogContext);
  useEffect(() => {
    getLogs();
  }, []);

  console.log(logs);
  return (
    <div>
      {!loading && logs !== null ? (
        logs.map(log => (
          <div key={log.id}>
            <ul>
              <li>{log.message}</li>
            </ul>
          </div>
        ))
      ) : (
        <h1>...Loading</h1>
      )}
    </div>
  );
}

Logs.propTypes = {
  //
};

export default Logs;
