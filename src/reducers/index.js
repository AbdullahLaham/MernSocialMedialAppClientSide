import authReducer from './AuthReducer';
import postReducer from './PostReducer';

import { combineReducers } from 'redux';

export default combineReducers({
    authReducer,
    postReducer,
});




