import {FETCH_DATA, UPDATE_DATA, SET_ERROR} from '../actions/';

const initialState = {
    smurfs: [],
    isFetchingData: false,
    error: ''
};

export const smurfReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return {
                ...state,
                isFetchingData: true,
                smurfs: []
            };
        case UPDATE_DATA:
            return {
                ...state,
                smurfs: action.payload,
                isFetchingData: false
            };
        case SET_ERROR:
            return {
                ...state,
                isFetchingData: false,
                error: action.payload
                    };
            default: 
            return state;
    };
};