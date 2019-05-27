import { FETCH_DATA } from './types';

export const getData = dispatch => {
    dispatch({
        type: FETCH_DATA,
        payload: []
    });
}