import { v4 as uuidv4 } from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from './types';

export const setAlert = (msg , timeout = 5000) => dispatch => {
  const id = uuidv4();
  // console.log("ID : " + id);
  dispatch({
    type: SET_ALERT,
    payload:{msg , id}
  });
  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};
