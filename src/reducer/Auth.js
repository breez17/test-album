import {mainState} from "./index";

mainState();

import { Constants } from '../constants';

const initialState = {
    loading: false,
    auth: [],
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
                auth: action.auth,
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