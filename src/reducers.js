/**
 * Created by Walter on 2017/5/9.
 */

import {
    combineReducers
} from 'redux-immutable';

import routerReducer from './reducers/routerReducer';
import posts from './reducers/postReducer';

export default combineReducers({
    posts,
    routing: routerReducer
})