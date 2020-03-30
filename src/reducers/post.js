import { GET_POSTS, ERROR } from '../actions/types';

const initialState = {
  posts: [],
  loading: true,
  error: false
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        posts: payload,
        loading: false
      };
    case ERROR:
      return {
        ...state,
        error: true,
        loading: false
      };
    default:
      return state;
  }
};
