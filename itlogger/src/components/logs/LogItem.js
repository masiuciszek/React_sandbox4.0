import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Delete } from 'styled-icons/feather';
import { cl } from '../styled/Global';
import { LogContext } from '../../context/logs/logs.state';

const LogItem = ({ log }) => {
  const { removeLog } = useContext(LogContext);

  const handleDelete = () => {
    removeLog(log.id);
  };
  return (
    <>
      <StyledLog>
        {' '}
        <span className={log.attention ? 'attention' : 'natural'}>
          {log.message}
        </span>{' '}
        Created by
        <span className={log.attention ? 'attention' : 'natural'}>
          {log.tech}
        </span>{' '}
        <span>
          <Delete size="34" onClick={handleDelete} />
        </span>
      </StyledLog>
    </>
  );
};
LogItem.propTypes = {
  log: PropTypes.object.isRequired,
};

const StyledLog = styled.li`
  font-size: 1.8em;
  font-weight: 600;
  margin: 0.6em 0;
  position: relative;

  width: 80%;
  .attention {
    color: ${cl.danger};
  }
  .natural {
    color: ${cl.primary};
  }
  span {
    margin: 0 0.4em;
    cursor: pointer;
  }
  span + span + span {
    color: ${cl.danger};
    float: right;
    /* position: absolute;
    right: 0;
    top: 0; */
  }
`;
export default LogItem;
