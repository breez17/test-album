import { apiHelper } from '../helpers'

export const photoService = {
    getPhotos,
};

function getPhotos() {
    const requestOptions = {
        method: 'GET',
    };
    return fetch(`${process.env.REACT_APP_API_URL}photos`, requestOptions).then(apiHelper.handleResponse);
}