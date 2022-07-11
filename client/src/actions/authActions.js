import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import {
  GET_ERRORS,
  USER_LOADED,
  SET_CURRENT_USER,
  LOG_OUT
} from "./types";

// Load User
export const loadUser = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/users');
    // console.log("result Token:",res.data);

    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (err) {
    // console.log("Error:",err);
    // dispatch({
    //   type: AUTH_ERROR
    // });
  }
};

// Register User
export const registerUser = (userData) => dispatch => {
    const res = axios
        .post("/api/users/register", userData)
        .then(res => {
            // console.log('login Success');
            return res.data
        })
        .catch(
            err => {
                // console.log(err.response.data)
                dispatch({
                    type: GET_ERRORS,
                    payload : err.response.data
                })
            }
    );
    return res;
};
// Login - get user token
export const loginUser = userData => dispatch => {
 const res = axios
    .post("/api/users/login", userData)
    .then(res => {
      // console.log(res.data);
      // Save to localStorage
// Set token to localStorage
      
      const { token } = res.data;
      // console.log(res.data.token);
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
      return res.data;
    })
    .catch(err => {
      console.log(err.response.data);
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    }
  );
  return res;
};


// Set logged in user
export const setCurrentUser = decoded => {
  // console.log("worked here!");
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
  
};

// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from local storage
  localStorage.removeItem("jwtToken");
  // console.log("worked here!");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};