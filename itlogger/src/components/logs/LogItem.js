/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Delete } from 'styled-icons/feather';
import { cl } from '../styled/Global';
import { LogContext } from '../../context/logs/logs.state';

const LogItem = ({ log,toggleEditLog }) => {
  const { removeLog, setCurrent } = useContext(LogContext);

  const handleDelete = () => {
    removeLog(log.id);
  };

  const handleCurrent = () => {
    setCurrent(log)
    toggleEditLog()

  }
  return (
    <>
      <StyledLog>
        {' '}
        <span
          id="msg"
          className={log.attention ? 'attention' : 'natural'}
          onClick={handleCurrent}
        >
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
  toggleEditLog: PropTypes.func.isRequired,
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
  #msg {
    position: relative;
    margin: 3em 0;
    transition: all 300ms ease-in-out;
    &:hover {
      &::after {
        content: 'Edit';
        position: absolute;
        top: -25px;
        left: 0;
        transition: all 300ms ease-in-out;
      }
    }
  }
`;
export default LogItem;
