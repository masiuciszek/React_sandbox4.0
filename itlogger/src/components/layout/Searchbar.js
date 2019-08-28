import React, { useRef, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { Search } from 'styled-icons/boxicons-solid';
import { StyledInput } from '../styled/Input';
import useToggle from '../../hooks/useToggle';
import { cl } from '../styled/Global';
import { LogContext } from '../../context/logs/logs.state';

function SearchBar() {
  const { searchLogs } = useContext(LogContext);
  const [on, toggle] = useToggle(false);
  const text = useRef('');

  const handleChange = () => {
    searchLogs(text.current.value);
  };

  return (
    <StyledNav>
      <Search size="45" onClick={toggle} />
      <form>
        {on ? (
          <StyledInput type="text" ref={text} onChange={handleChange} />
        ) : null}
      </form>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  padding: 2rem;
  background: ${cl.primary};
  svg {
    color: ${cl.white};
    cursor: pointer;
  }
  form {
    width: 80%;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    flex-wrap: wrap;
  }
`;
export default SearchBar;
