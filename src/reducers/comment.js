import { GET_COMMENTS, ERROR, ADD_COMMENT } from '../actions/types';

const initialState = {
  comments: [],
  loading: true,
  error: false
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_COMMENTS:
      return {
        ...state,
        comments: payload,
        loading: false
      };
    case ERROR:
      return {
        ...state,
        error: true,
        loading: false
      };
    case ADD_COMMENT:
      return {
        ...state,
        comments: [payload, ...state.comments],
        loading: false
      };
    default:
      return state;
  }
};
