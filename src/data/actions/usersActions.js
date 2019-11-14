import { usersConstants } from '../constants/users';
import { userService } from '../services/userService';

export const usersActions = {
    getUsers,
};


function getUsers() {
    return dispatch => {
        dispatch(request());
        userService.getUsers()
            .then(
                user => dispatch(success(user)),
                error => dispatch(failure(error.toString())),
            );
    };

    function request() {
        return { type: usersConstants.GET_USERS_START }
    }

    function success(user) {
        return { type: usersConstants.GET_USERS_SUCCESS, user }
    }

    function failure(error) {
        return { type: usersConstants.GET_USERS_FAILURE, error }
    }
}