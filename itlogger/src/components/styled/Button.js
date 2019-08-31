import styled from 'styled-components';
import { cl, fade } from './Global';

export const Btn = styled.button`
  padding: 0.2em 0.2em;
  border: none;
  color: #333;
  transition: all cubic-bezier(0.165, 0.84, 0.44, 1);
  font-size: 12px;
  background: transparent;
  cursor: pointer;
  animation: ${fade} 300ms ease-in-out;
  &:hover {
    color: ${cl.white};
  }
`;
