import { FORM_VALIDATE, FORM_VALIDATE_SUCCESS, FORM_VALIDATE_ERROR } from '../types';

const initialState = {
    error: null
}

export default function(state = initialState, action) {
    switch (action.type) {
        case FORM_VALIDATE:
            return {
                ...state,
                error: null
            }
        case FORM_VALIDATE_SUCCESS:
            return {
                ...state,
                error: null
            }
        case FORM_VALIDATE_ERROR:
            return {
                ...state,
                error: true
            }
        default:
            return state;
    }
}
