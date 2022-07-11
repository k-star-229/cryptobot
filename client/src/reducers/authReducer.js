import {
  USER_LOADED,
  SET_CURRENT_USER,
  USER_LOADING,
  LOG_OUT
} from "../actions/types";
const isEmpty = require("is-empty");
const initialState = {
  isAuthenticated: false,
  user: {},
  loading: false
};
export default function(state = initialState, action) {
  switch (action.type) {
    case USER_LOADED:
      // console.log("payload:",action.payload);
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    case LOG_OUT:
      return {
        ...state, 
        isAuthenticated : false
      }
    default:
      return state;
  }
}