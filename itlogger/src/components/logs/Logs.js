/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { LogContext } from '../../context/logs/logs.state';
import LogItem from './LogItem';

function Logs() {
  const { getLogs, logs, loading } = useContext(LogContext);
  useEffect(() => {
    getLogs();
  }, []);

  console.log(logs);
  return (
    <StyledLogs>
      <ul>
        {!loading && logs !== null ? (
          logs.map(log => <LogItem key={log.id} log={log} />)
        ) : (
          <h1>...Loading</h1>
        )}
      </ul>
    </StyledLogs>
  );
}

const StyledLogs = styled.div`
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  width: 60%;
  box-shadow: 2px 2px 3px 2px #ccc;
  margin: 3em auto;
  padding: 3em;

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
`;
export default Logs;
