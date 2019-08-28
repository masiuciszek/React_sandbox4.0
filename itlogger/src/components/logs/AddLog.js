/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import styled from 'styled-components';
import { Cancel } from 'styled-icons/material';
import { cl } from '../styled/Global';
import { StyledInput } from '../styled/Input';
import useForm from '../../hooks/useForm';
import { LogContext } from '../../context/logs/logs.state';

const AddLog = props => {
  const { addLog } = useContext(LogContext);
  const [message, onChangeForMsg, reset] = useForm();
  const [attention, onChangeForAttention, reset2, setValue] = useForm(false);
  const [tech, onChangeForTech, reset3] = useForm();

  const handleSubmit = e => {
    e.preventDefault();
    if (message === '' || tech === '') {
      alert('please enter some values');
      return;
    }
    const newLog = {
      message,
      attention,
      tech,
      date: new Date(),
    };

    addLog(newLog);

    reset();
    reset2();
    reset3();
  };

  return (
    <>
      <ModalWrapper
        style={{
          transform: props.toggle ? 'translateY(0vh)' : 'translateY(-100vh)',
          opacity: props.toggle ? '1' : '0',
        }}
      >
        <div className="modal-header">
          <h3>Add new Log</h3>
          <span className="close-modal-btn" onClick={props.toggle}>
            <Cancel size="35" />
          </span>
        </div>
        <div className="modal-body">
          <form onSubmit={handleSubmit}>
            <StyledInput
              type="text"
              placeholder="message"
              value={message}
              onChange={onChangeForMsg}
            />
            <select
              name="tech"
              id="techs"
              value={tech}
              onChange={onChangeForTech}
            >
              <option value="" disabled>
                Select a tech
              </option>
              <option value="Mia">Mia</option>
              <option value="Stina">Stina</option>
              <option value="Karol">Karol</option>
            </select>
            <div className="attention">
              <input
                type="checkbox"
                name="attention"
                checked={attention}
                value={attention}
                onChange={() => setValue(!attention)}
              />
              <span>Need attention</span>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="modal-footer">
          <button className="btn-cancel" onClick={props.toggle}>
            CLOSE
          </button>
          <button className="btn-continue" onClick={props.toggle}>
            CONTINUE
          </button>
        </div>
      </ModalWrapper>
    </>
  );
};

const ModalWrapper = styled.div`
  background: white;
  border: 1px solid #d0cccc;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.17);
  margin: 20em auto 0;
  transition: all 0.8s;
  max-width: 60%;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 5em;
  left: 30%;
  z-index: 2;
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    input {
      max-width: 70%;
    }
    select {
      width: 60%;
    }
    .attention {
      display: flex;
      input[type='checkbox'] {
        position: relative;
      }
      span {
      }
    }
  }

  .modal-header {
    background: #263238;
    height: 10em;
    line-height: 40px;
    padding: 5px 20px;
    text-align: right;
  }

  .modal-header h3 {
    color: white;
    font-size: 2.5em;
    margin: 0;
    padding: 0;
    text-align: center;
  }

  .modal-body {
    padding: 5em 12em;
    text-align: center;
  }

  .modal-footer {
    background: #263238;
    height: 35px;
    padding: 15px;
  }

  .close-modal-btn {
    color: white;
    cursor: pointer;
    float: right;
    font-size: 30px;
    margin: 0;
    transition: all 300ms cubic-bezier(0.6, 0.04, 0.98, 0.335);
    &:hover {
      color: ${cl.primary};
    }
  }

  .btn-cancel,
  .btn-continue {
    background: coral;
    border: none;
    color: white;
    cursor: pointer;
    font-weight: bold;
    outline: none;
    padding: 10px;
  }

  .btn-cancel {
    background-color: ${cl.danger};
    float: left;
  }

  .btn-continue {
    background-color: ${cl.success};
    float: right;
  }

  .back-drop {
    background-color: rgba(48, 49, 48, 0.42);
    height: 100%;
    position: fixed;
    transition: all 1.3s;
    width: 100%;
  }

  .open-modal-btn {
    margin: 15px;
    padding: 10px;
    font-weight: bold;
  }
`;
export default AddLog;
