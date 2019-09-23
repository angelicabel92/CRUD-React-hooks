import { FORM_VALIDATE, FORM_VALIDATE_SUCCESS, FORM_VALIDATE_ERROR } from '../types';

export function formValidatedAction() {
    return dispatch => {
        dispatch(startValidation());
    }
}

export const startValidation = () => {
    return {
        type: FORM_VALIDATE
    }
}

export const validatedSuccess = () => {
    return {
        type: FORM_VALIDATE_SUCCESS
    }
}

export const validatedError = () => {
    return {
        type: FORM_VALIDATE_ERROR
    }
}
