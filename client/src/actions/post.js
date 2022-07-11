// import { setAlert } from './alert';
import axios from "axios";
import { setAlert } from "./alert";
import {
    ADD_POST,
    GET_POSTS,
    POST_ERROR,
    SET_ALERT
} from './types';
//Get all posts
export const getPosts = () => async (dispatch) => {
    try {
        const res = await axios.get('/api/posts');
        dispatch({
            type: GET_POSTS,
            payload : res.data
        })
      // console.log('Hello');
    }
    catch (err) { 
        console.log(err);
    }
};
//Get all Posts
export const getBlogs = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/blogs');
    dispatch({
      type: GET_POSTS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add post
export const addPost = (formData) => async (dispatch) => {
  try {
    // console.log("hello I can be here");
    const res = await axios.post('/api/posts', formData);
    // console.log("TES : " + res);
    dispatch({
      type: ADD_POST,
      payload: res.data
    });
    // console.log("RES DATA : " + res)
    dispatch(setAlert("You have created blog successfully"))
    // console.log("CONSOLEDATA: "  + res);

    // dispatch(setAlert('Post Created', 'success'));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
