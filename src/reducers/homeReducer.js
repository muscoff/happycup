import { FETCH_DATA } from '../actions/types';

const initialState = {
    info: []
}

export default function(state = initialState, action){
    switch(action.type){
        case FETCH_DATA:
            return {
                ...state,
                info : action.payload
            }
        default:
            return state;
    }
}