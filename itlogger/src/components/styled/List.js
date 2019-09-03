import styled from 'styled-components'
import { cl } from './Global';

export const List = styled.div`
  background: white;
  border: 1px solid #333;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.17);
  margin: 20em auto 0;
  transition: all 0.8s;
  min-width: 40%;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 5em;
  left: 30%;
  z-index: 2;
  border-radius: 8px;
  .header{
    background:${cl.primary};
    padding: 3em;
    display: flex;
    justify-content: center;
    border-radius: 8px;
    h1{
      font-size: 2.7em;
      color: ${cl.white};
      letter-spacing: .1em;
    }
  }

  .body{
    padding: 3em;
    ul {
      /* max-width: 60em; */
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      li {
        font-size: 1.8em;
        margin: .5em 0;
        border-bottom: 1px solid #333;
        width: 100%;
        span {
          cursor: pointer;
          float: right;
          transition: all 0.8s;
          &:hover{
            color: ${cl.danger};
          }
        }
      }
    }
  }

  .footer {
    background: ${cl.dark};
    padding: 2em 6em;
    border-radius: 8px;
    button {
      padding: .5em .9em;
      margin: 0 auto;
      max-width: 8em;
      display: block;
      font-size: 1.4em;
    }
  }

`