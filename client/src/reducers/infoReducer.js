import {
  FETCH_INFOS,
  CREATE_INFO,
  EDIT_INFO,
  FETCH_INFO,
  DELETE_INFO
} from '../actions/type';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_INFOS:
      return action.payload;
    case CREATE_INFO:
      return [...state, action.payload];
    case EDIT_INFO:
      return state.map(info => {
        if (info.id === action.payload.id) {
          return { ...info, ...action.payload };
        }
        return info;
      });
    case FETCH_INFO:
      return state;
    case DELETE_INFO:
      return state.filter(info => info.id !== action.payload.id);
    default:
      return state;
  }
};
