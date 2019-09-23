import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import validatedReducer from './validatedReducer';

export default combineReducers({
    products: productsReducer,
    error: validatedReducer
});
