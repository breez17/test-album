
import {
  albumsConstants
} from "../constants/albums";

const initialState = {
    loading: false,
    albums: [],
};



export function albumsState(state = initialState, action) {
    switch (action.type) {
        case albumsConstants.GET_ALBUMS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case albumsConstants.GET_ALBUMS_SUCCESS:
            return {
                ...state,
                albums: action. albums,
                loading: false,
            };
        case albumsConstants.GET_ALBUMS_FAILURE:
            return {
                ...state,
                loading: false,
            };


        default:
            return state
    }
}