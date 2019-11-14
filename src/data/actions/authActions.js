import { authConstants } from '../constants/auth';
import { userService } from '../services/userService';

export const authActions = {
    login,
};


function login(username, email) {
    return dispatch => {
        dispatch(request());
        userService.logIn(username, email)
            .then(
                auth => dispatch(success(auth)),
                error => dispatch(failure(error.toString())),
            );
    };

    function request() {
        return { type: authConstants.AUTH_REQUEST }
    }

    function success(auth) {
        return { type: authConstants.AUTH_SUCCESS, auth }
    }

    function failure(error) {
        return { type: authConstants.AUTH_FAILURE, error }
    }
}