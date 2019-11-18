import { apiHelper } from '../helpers'

export const albumsService = {
    getAlbums,
};

function getAlbums(userId) {
    const requestOptions = {
        method: 'GET',
    };
    return fetch(`${process.env.REACT_APP_API_URL}albums?userId=${userId}`, requestOptions).then(apiHelper.handleResponse);
}