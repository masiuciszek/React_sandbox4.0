import { GET_TECHS, SET_LOADING, TECHS_ERROR } from "../types";

export default (state, { type, payload }) => {
  switch (type) {
    case GET_TECHS:
      return {
        ...state,
        techs: payload,
        loading: false
      };
      case TECHS_ERROR:
        return {
          ...state,
          error: payload,
          loading: false
        }
      case SET_LOADING:
      return{
        ...state,
        loading: true
      }
    default:
      return state;
  }
};
