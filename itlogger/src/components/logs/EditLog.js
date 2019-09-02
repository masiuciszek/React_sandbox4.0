import React,{useContext,useEffect} from 'react';
import PropTypes from 'prop-types';
import { LogContext } from '../../context/logs/logs.state';
import { ModalWrapper } from './AddLog';
import { Select } from '../styled/Select';
import TechOption from '../techs/TechOption';
import { Cancel } from 'styled-icons/material';
import { StyledInput } from '../styled/Input';
import {BtnSubmit} from '../styled/Button'
import useForm from '../../hooks/useForm';
import styled from 'styled-components'

const EditLog = ({ toggleEditLog }) => {
  const  { updateLog,current} = useContext(LogContext)

  const [message, onChangeForMsg, reset,setMessage] = useForm();
  const [attention, onChangeForAttention, reset2, setValue] = useForm(false);
  const [tech, onChangeForTech, reset3, setTech] = useForm();


    useEffect(() => {
      if(current){
        setMessage(current.message)
        setValue(current.attention)
        setTech(current.tech)
      }
    },[current])

    const handleSubmit = (e) => {
      if (message.length === '' && tech.length === '') {
          return
      } else {
        const updatedLog = {
          id: current.id,
          message,
          attention,
          tech,
          date: Date.now()
        }
        updateLog(updatedLog);
      }
      reset()
      reset2()
      reset3()
    }

  return (
    <>
    <EditModal
    style={{
      transform: toggleEditLog ? 'translateY(0vh)' : 'translateY(-100vh)',
      opacity: toggleEditLog ? '1' : '0',
    }}
  >
    <div className="modal-header">
      <h3>Update Log</h3>
      <span className="close-modal-btn" onClick={toggleEditLog}>
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


        <Select
        name="tech"
        id="techs"
        value={tech}
        onChange={onChangeForTech}>
        <option value="" disabled>
        Select a tech
      </option>

      <TechOption />
        </Select>
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
        <BtnSubmit type="submit">Update Log</BtnSubmit>
      </form>
    </div>
    <div className="modal-footer">
      <button className="btn-cancel" onClick={toggleEditLog}>
        CLOSE
      </button>
      <button className="btn-continue" onClick={toggleEditLog}>
        CONTINUE
      </button>
    </div>
  </EditModal>
    </>
  );
};

const EditModal = styled(ModalWrapper)`
position: absolute;
`

EditLog.propTypes = {
  toggleEditLog: PropTypes.func.isRequired,
};
export default EditLog;
