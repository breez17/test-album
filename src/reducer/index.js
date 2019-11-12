import {combineReducers} from 'redux';
import users from './Users';
import auth from './Auth';
import albums from './Album';
import photos from "./Photo";

const mainState = combineReducers({
    users,
    auth,
    albums,
    photos,
});

export default mainState;
