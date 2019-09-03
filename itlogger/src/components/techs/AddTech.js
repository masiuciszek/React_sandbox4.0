import React,{useContext} from 'react';
import styled from 'styled-components'
import { TechContext } from '../../context/techs/techs.state';
import useForm from '../../hooks/useForm';
import { ModalWrapper } from '../logs/AddLog';
import PropTypes from 'prop-types'
import {BtnSubmit} from '../styled/Button'
import { StyledInput } from '../styled/Input';
import { Cancel } from 'styled-icons/material';


const AddTech = ({toggleAddTechs}) => {
  const {addTech} = useContext(TechContext)
  const [firstName, handleFirstName, reset] = useForm()
  const [lastName, handleLastName, reset2] = useForm()
  const handleSubmit = (e) => {
    e.preventDefault()
    if(firstName === '' && lastName === '') {
      alert('please finn in the fields')
      return;
    } else {
      const newTech = {
        id: Math.floor(Math.random() * 100) + 1,
        firstName,
        lastName
      }
      addTech(newTech)
      reset()
      reset2()
      toggleAddTechs()
    }
  }
  return (
    <StyledAdd

        style={{
          transform: toggleAddTechs ? 'translateY(0vh)' : 'translateY(-100vh)',
          opacity: toggleAddTechs ? '1' : '0',
        }}
      >
        <div className="modal-header">
          <h3>Add new Tech</h3>
          <span className="close-modal-btn" onClick={toggleAddTechs}>
            <Cancel size="35" />
          </span>
        </div>
        <div className="modal-body">
          <form onSubmit={handleSubmit}>
            <StyledInput
              type="text"
              placeholder="firstName"
              value={firstName}
              onChange={handleFirstName}
            />
            <StyledInput
              type="text"
              placeholder="lastName"
              value={lastName}
              onChange={handleLastName}
            />




            <BtnSubmit type="submit">Add Tech </BtnSubmit>
          </form>
        </div>
        <div className="modal-footer">
          <button className="btn-cancel" onClick={toggleAddTechs}>
            CLOSE
          </button>
          <button className="btn-continue" onClick={toggleAddTechs}>
            CONTINUE
          </button>
        </div>

    </StyledAdd>
  );
};

AddTech.propTypes = {
  toggleAddTechs: PropTypes.func.isRequired,

}

const StyledAdd = styled(ModalWrapper)`
  input{
    margin: .6em 0;
  }

`
export default AddTech;