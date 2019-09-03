import styled from 'styled-components';
import { cl, fade } from './Global';

export const Btn = styled.button`
  padding: 0.2em 0.2em;
  border: ${props => props.cl ? '2px solid #fff' : 'none' };
  color: ${props => props.cl ? '#fff' : '#333' };
  transition: all 300ms ease-in-out;
  font-size: 12px;
  background: transparent;
  cursor: pointer;
  animation: ${fade} 300ms ease-in-out;
  &:hover {
    color: ${props => props.cl ? `${cl.primary}`: '#fff' };
  }
`;


export const BtnSubmit = styled(Btn)`
font-size: 18px;
border: 2px solid ${cl.dark};
border-radius: 8px;
margin: .6em 0;
&:hover{
  color: ${cl.white};
  background: ${cl.success};

}
`