import { apiHelper } from '../helpers'

export const albumsService = {
    getAlbums,
};

function getAlbums() {
    const requestOptions = {
        method: 'GET',
    };
    return fetch(`${process.env.REACT_APP_API_URL}albums`, requestOptions).then(apiHelper.handleResponse);
}