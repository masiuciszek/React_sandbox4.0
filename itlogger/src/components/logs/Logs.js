/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { LogContext } from '../../context/logs/logs.state';
import LogItem from './LogItem';
import PropTypes from 'prop-types';

function Logs({toggleEditLog}) {
  const { getLogs, logs, loading } = useContext(LogContext);
  useEffect(() => {
    getLogs();
  }, []);

  return (
    <StyledLogs>
      <ul>
        {!loading && logs !== null ? (
          logs.map(log => <LogItem key={log.id} log={log} toggleEditLog={toggleEditLog} />)
        ) : (
          <h1>...Loading</h1>
        )}
      </ul>
    </StyledLogs>
  );
}

Logs.propTypes = {
  toggleEditLog: PropTypes.func.isRequired,
}

const StyledLogs = styled.div`
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  width: 60%;
  box-shadow: 2px 2px 3px 2px #ccc;
  margin: 3em auto;
  padding: 3em;
  height: 100%;
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    li {
      margin: 2em 0;
    }
  }
`;
export default Logs;
