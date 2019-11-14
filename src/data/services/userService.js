import { apiHelper } from '../helpers'

export const userService = {
    logIn,
};

function logIn(username, email) {
    const requestOptions = {
        method: 'GET',
    };
    return fetch(`${process.env.REACT_APP_API_URL}users?username=${username}&email=${email}`, requestOptions).then(apiHelper.handleResponse);
}