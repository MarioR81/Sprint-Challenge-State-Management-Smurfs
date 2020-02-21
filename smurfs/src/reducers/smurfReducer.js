import {GET_DATA} from '../actions/';

const initialState = {
    smurfs: [],
    isFetchingData: false
};

export const smurfReducer = (state=initialState, action) => {
    switch (action.type) {
        case GET_DATA:
            return {
                ...state,
                isFetchingData: true
            };
            defualt: return state;
    }
}