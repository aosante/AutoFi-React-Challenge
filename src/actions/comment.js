import axiosInstance from '../utils/axios';
import { GET_COMMENTS, ERROR, ADD_COMMENT } from './types';

// Get comments by post id
export const getComments = postId => async dispatch => {
  try {
    const res = await axiosInstance().get(`/comments/?postId=${postId}`);
    dispatch({ type: GET_COMMENTS, payload: res.data });
  } catch (err) {
    dispatch({ type: ERROR });
  }
};
// Add a comment
export const addComment = comment => async dispatch => {
  // return console.log(comment);
  dispatch({ type: ADD_COMMENT, payload: comment });
};
