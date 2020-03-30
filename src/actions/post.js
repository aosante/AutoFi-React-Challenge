import axiosInstance from '../utils/axios';
import { GET_POSTS, ERROR } from './types';

// Get posts from API
export const getPosts = () => async dispatch => {
  try {
    const res = await axiosInstance().get('/posts');
    dispatch({ type: GET_POSTS, payload: res.data });
  } catch (err) {
    dispatch({
      type: ERROR
    });
  }
};
