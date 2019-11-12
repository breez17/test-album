import { apiHelper } from '../helpers'

export const photoService = {
    getPhotos,
};

function getPhotos(albumId) {
    const requestOptions = {
        method: 'GET',
    };
    return fetch(`${process.env.REACT_APP_API_URL}photos?albumId=${albumId}`, requestOptions).then(apiHelper.handleResponse);
}