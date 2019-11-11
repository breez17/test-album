import { Constants } from '../constants';

const initialState = {
    loading: false,
    photos: [],
};

export function mainState(state = initialState, action) {
    switch (action.type) {
        case Constants.GET_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case Constants.GET_SUCCESS:
            return {
                ...state,
                photos: action.photos,
                loading: false,
            };
        case Constants.GET_FAILURE:
            return {
                ...state,
                loading: false,
            };


        default:
            return state
    }
}