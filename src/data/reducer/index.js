import {combineReducers} from 'redux';
import { usersState} from './Users';
import {authState} from './Auth';
import {albumsState} from './Album';
import {photosState} from "./Photo";

const mainState = combineReducers({
    usersState,
    authState,
    albumsState,
    photosState,
});

export default mainState;
