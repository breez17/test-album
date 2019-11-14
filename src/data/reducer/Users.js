import {
    usersConstants
} from '../constants/users';


const initialState = {
    loading: false,
    users: [],
};

export function usersState(state = initialState, action) {
    switch (action.type) {
        case usersConstants.GET_USERS_START:
            return {
                ...state,
                loading: true,
            };
        case usersConstants.GET_USERS_SUCCESS:
            return {
                ...state,
                users: action.users,
                loading: false,
            };
        case usersConstants.GET_USERS_FAILURE:
            return {
                ...state,
                loading: false,
            };


        default:
            return state
    }
}