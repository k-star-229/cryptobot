import { combineReducers } from 'redux';
import alertReducer from './alertReducer';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import postReducer from './postReducers';

export default combineReducers({
    auth: authReducer,
    errors: errorReducer,
    post: postReducer,
    alert: alertReducer
}); 