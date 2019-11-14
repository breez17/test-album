import {authConstants} from '../constants/auth'

const initialState = {
    loading: false,
    auth: [],
};

export function authState(state = initialState, action) {
    switch (action.type) {
        case authConstants.AUTH_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case authConstants.AUTH_SUCCESS:
            return {
                ...state,
                auth: action.auth,
                loading: false,
            };
        case authConstants.AUTH_FAILURE:
            return {
                ...state,
                loading: false,
            };


        default:
            return state
    }
}