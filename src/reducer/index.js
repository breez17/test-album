import {combineReducers} from 'redux';
import users from './Users';
import auth from './Auth';
import albums from './Album';
import photos from "./Photo";

const appState = combineReducers({
    users,
    auth,
    albums,
    photos,
});

export default appState;
