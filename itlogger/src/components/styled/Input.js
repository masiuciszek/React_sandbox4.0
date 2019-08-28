import styled, { keyframes } from 'styled-components';

const fade = keyframes`
from{
  opacity:0;
}
to: {
  opacity: 1;
}
`;

export const StyledInput = styled.input`
  padding: 0.45em 0.8em;
  border: 2px solid #333;
  font-size: 1.5em;
  width: 35em;
  border-radius: 8px;
  animation: ${fade} 500ms ease-in-out;
  box-shadow: 1px -1px 1px -1px #333;
`;
