import { combineReducers } from 'redux';
import post from './post';
import comment from './comment';

export default combineReducers({ post, comment });
