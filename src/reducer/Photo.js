import {
    GET_PHOTOS_START,
    GET_PHOTOS_SUCCESS,
    GET_PHOTOS_FAILURE
} from '../constants/photos'
const initialState = {
    loading: false,
    photos: [],
};

export function mainState(state = initialState, action) {
    switch (action.type) {
        case GET_PHOTOS_START:
            return {
                ...state,
                loading: true,
            };
        case GET_PHOTOS_SUCCESS:
            return {
                ...state,
                photos: action.photos,
                loading: false,
            };
        case   GET_PHOTOS_FAILURE:
            return {
                ...state,
                loading: false,
            };


        default:
            return state
    }
}