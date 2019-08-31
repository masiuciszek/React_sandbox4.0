import React from 'react';
import styled from 'styled-components';
import { Add } from 'styled-icons/crypto';
import { Edit3 } from 'styled-icons/feather';
import { AddressBook } from 'styled-icons/fa-solid';
import { JoystickButton } from 'styled-icons/boxicons-regular';
import PropTypes from 'prop-types';
import { cl, fade } from '../styled/Global';
import useToggle from '../../hooks/useToggle';
import { Btn } from '../styled/Button';

function AddBtn({ toggle, toggleEditLog }) {
  // const [on, toggle] = useToggle();
  return (
    <StyledAddBtn>
      <span>
        <JoystickButton size="55" onClick={toggle} />
      </span>
      <div className="btn-group">
        <Btn>
          {' '}
          <Add size="35" />{' '}
        </Btn>
        <Btn onClick={toggleEditLog}>
          {' '}
          <Edit3 size="35" />{' '}
        </Btn>
      </div>
    </StyledAddBtn>
  );
}

AddBtn.propTypes = {
  toggleEditLog: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
};

const StyledAddBtn = styled.div`
  background: ${cl.primary};
  min-width: 15em;
  min-height: 13em;
  padding: 2em;
  border-radius: 50%;
  position: absolute;
  bottom: 5em;
  right: 5em;
  cursor: pointer;
  transition: all 300ms ease-in-out;
  box-shadow: 2px 2px 2px 3px #ccc;
  border: 1px solid #777;
  text-align: center;
  &:hover .btn-group {
    display: block;
    animation: ${fade} 300ms ease-in-out;
  }
  span {
    margin-top: 2em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 300ms ease-in-out;
    /* &:hover + div {
      display: block;
    } */
    svg {
      transition: all 300ms ease-in-out;
      &:hover {
        color: ${cl.white};
      }
    }
  }
  .btn-group {
    display: flex;
    display: none;
    transition: all 300ms ease-in-out;
  }
`;
export default AddBtn;
