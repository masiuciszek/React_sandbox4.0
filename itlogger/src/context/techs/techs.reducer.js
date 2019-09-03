import { GET_TECHS, SET_LOADING, TECHS_ERROR,DELETE_TECH, ADD_LOG } from "../types";

export default (state, { type, payload }) => {
  switch (type) {
    case GET_TECHS:
      return {
        ...state,
        techs: payload,
        loading: false
      };
      case ADD_LOG:
        return{
          ...state,
          techs: [...state.logs,payload] ,
          loading: false
        }
      case DELETE_TECH:
        return {
          ...state,
          techs: state.techs.filter(tech => tech.id !== payload),
          loading:false
        }
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
