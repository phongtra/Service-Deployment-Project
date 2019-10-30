import { FETCH_USER } from '../actions/type';

export default (state = { authenticated: null }, action) => {
  switch (action.type) {
    case FETCH_USER:
      return { ...state, authenticated: action.payload || false };
    default:
      return state;
  }
};
