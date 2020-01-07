import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../redux/store';
import { ActionTypesApp } from '../redux/types';

interface P {
  value: number;
  increment: () => void;
  decrement: () => void;
}

const Counter: React.FC<P> = ({ value, decrement, increment }) => (
  <div className="counter">
    <div className="wrapper">
      <button type="button" onClick={increment}>ADD</button>
      <h1>{value}</h1>
      <button type="button" onClick={decrement}>SUB</button>
    </div>
  </div>
);

const mapStateToProps = (state: AppState) => ({ value: state.app.value });

const mapDispatchToProps = (dispatch: Function) => ({
  increment: () => dispatch({ type: ActionTypesApp.INCREASE }),
  decrement: () => dispatch({ type: ActionTypesApp.DECREASE }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
