import React, { useRef, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { StyledInput } from '../styled/Input';
import useToggle from '../../hooks/useToggle';
import { cl } from '../styled/Global';
import { LogContext } from '../../context/logs/logs.state';
import { SearchAlt2 } from 'styled-icons/boxicons-regular';



function SearchBar() {
  const { searchLogs } = useContext(LogContext);
  const [on, toggle] = useToggle(false);
  const text = useRef('');

  const handleChange = () => {
    searchLogs(text.current.value);
  };

  return (
    <StyledNav style={{backgroundColor: on ? '#fff' : `${cl.primary}`}}>
    <h3 className={on && 'on'}>It logger</h3>
      <SearchAlt2 className={on && 'on'} size="45" onClick={toggle} />
      <form>
        {on ? (
          <StyledInput type="text" ref={text} onChange={handleChange} placeholder="Search for a log..." />
        ) : null}
      </form>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  padding: 2rem;
  background: ${cl.primary};

  h3{
    font-size: 2em;
    color: #fff;
    float: right;
    letter-spacing: .3em;
    border-bottom: 1px solid #fefefe;
  }
  .on{
    color: ${cl.dark};
    border-bottom: 1px solid ${cl.dark};
  }
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
  .is-on{
    background: ${cl.white};
  }
`;
export default SearchBar;
