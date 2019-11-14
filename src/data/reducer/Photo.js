import {
    photosConstants
} from '../constants/photos'
const initialState = {
    loading: false,
    photos: [],
};

export function photosState(state = initialState, action) {
    switch (action.type) {
        case photosConstants.GET_PHOTOS_START:
            return {
                ...state,
                loading: true,
            };
        case photosConstants.GET_PHOTOS_SUCCESS:
            return {
                ...state,
                photos: action.photos,
                loading: false,
            };
        case   photosConstants.GET_PHOTOS_FAILURE:
            return {
                ...state,
                loading: false,
            };


        default:
            return state
    }
}