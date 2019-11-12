import {
    GET_USERS_SUCCESS,
    GET_USERS_START,
    GET_USERS_FAILURE
} from '../constants/users'

const initialState = {
    loading: false,
    users: [],
};

export function mainState(state = initialState, action) {
    switch (action.type) {
        case GET_USERS_START:
            return {
                ...state,
                loading: true,
            };
        case GET_USERS_SUCCESS:
            return {
                ...state,
                users: action.users,
                loading: false,
            };
        case GET_USERS_FAILURE:
            return {
                ...state,
                loading: false,
            };


        default:
            return state
    }
}