import {
    AUTH_SUCCESS,
    AUTH_FAILURE,
    AUTH_LOGOUT
} from '../constants/auth'

const initialState = {
    loading: false,
    auth: [],
};

export function authState(state = initialState, action) {
    switch (action.type) {
        case AUTH_LOGOUT:
            return {
                ...state,
                loading: true,
            };
        case AUTH_SUCCESS:
            return {
                ...state,
                auth: action.auth,
                loading: false,
            };
        case AUTH_FAILURE:
            return {
                ...state,
                loading: false,
            };


        default:
            return state
    }
}