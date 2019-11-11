import { apiHelper } from '../helpers'

export const userService = {
    getUsers,
};

function getUsers() {
    const requestOptions = {
        method: 'GET',
    };
    return fetch(`${process.env.REACT_APP_API_URL}users`, requestOptions).then(apiHelper.handleResponse);
}