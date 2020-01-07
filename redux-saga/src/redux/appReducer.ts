import { ActionTypesApp, State, AppActionTypes } from './types';

const initalState: State = {
  value: 0,
};

export default (state = initalState, action: AppActionTypes) => {
  switch (action.type) {
    case ActionTypesApp.INCREASE:
      return {
        ...state,
        value: state.value + 1,
      };
    case ActionTypesApp.DECREASE:
      return {
        ...state,
        value: state.value - 1,
      };
    default:
      return state;
  }
};
