import { Constants } from '../constants';

const initialState = {
    loading: false,
    albums: [],
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
                albums: action. albums,
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