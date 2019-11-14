import { photosConstants } from '../constants/photos';
import { photoService } from '../services/photosService';

export const photosActions = {
    getPhotos,
};


function getPhotos() {
    return dispatch => {
        dispatch(request());
        photoService.getPhotos()
            .then(
                photos => dispatch(success(photos)),
                error => dispatch(failure(error.toString())),
            );
    };

    function request() {
        return { type: photosConstants.GET_PHOTOS_START }
    }

    function success(photos) {
        return { type: photosConstants.GET_PHOTOS_SUCCESS, photos }
    }

    function failure(error) {
        return { type: photosConstants.GET_PHOTOS_FAILURE, error }
    }
}