import { albumsConstants } from '../constants/albums';
import { albumsService } from '../services/albumsService';

export const albumsActions = {
    getAlbums,
};


function getAlbums(userId) {
    return dispatch => {
        dispatch(request());
        albumsService.getAlbums(userId)
            .then(albums => {

                dispatch(success(albums))
            },
            error => dispatch(failure(error.toString())),
            );
    };

    function request() {
        return { type: albumsConstants.GET_ALBUMS_REQUEST }
    }

    function success(albums) {
        return { type: albumsConstants.GET_ALBUMS_SUCCESS, albums }
    }

    function failure(error) {
        return { type: albumsConstants.GET_ALBUMS_FAILURE, error }
    }
}