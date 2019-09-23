import { ADD_PRODUCT, 
    ADD_PRODUCT_ERROR,
    ADD_PRODUCT_SUCCESS,
    START_PRODUCTS_DOWNLOAD, 
    PRODUCTS_DOWNLOAD_SUCCESS, 
    PRODUCTS_DOWNLOAD_ERROR,
    GET_DELETE_PRODUCT,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_ERROR,
    GET_EDIT_PRODUCT,
    GET_EDIT_PRODUCT_SUCCESS,
    GET_EDIT_PRODUCT_ERROR,
    START_EDITION_PRODUCT,
    START_EDITION_PRODUCT_SUCCESS,
    START_EDITION_PRODUCT_ERROR
} from '../types';

// Cada reducer tienen su propio state
const initialState = {
    products: [],
    error: null,
    loading: false,
    product: {}
}

export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                error: null,
            }
        case ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                error: null,
                products: [...state.products, action.payload]
            }
        case ADD_PRODUCT_ERROR:
            return {
                ...state,
                error: true,
            }
        case START_PRODUCTS_DOWNLOAD:
            return {
                ...state,
                loading: true,
                product: {}
            }
        case PRODUCTS_DOWNLOAD_SUCCESS:
            return {
                ...state,
                products: action.payload,
                loading: false,
                error: false,
                product: {}
            }
        case PRODUCTS_DOWNLOAD_ERROR:
            return {
                ...state,
                products: [],
                error: true,
                loading: false,
                product: {}
            }
        case GET_DELETE_PRODUCT:
            return {
                ...state
            }
        case DELETE_PRODUCT_SUCCESS:
            return {
                ...state,
                error: null,
                products: state.products.filter(product => product.id !== action.payload)
            }
        case DELETE_PRODUCT_ERROR:
            return {
                ...state,
                error: true
            }
        case GET_EDIT_PRODUCT:
            return {
                ...state,
                error: null
            }
        case GET_EDIT_PRODUCT_SUCCESS:
            return {
                ...state,
                error: null,
                product: action.payload
            }
        case GET_EDIT_PRODUCT_ERROR:
            return {
                ...state,
                error: true
            }
        case START_EDITION_PRODUCT:
            return {
                ...state,
                error: null
            }
        case START_EDITION_PRODUCT_SUCCESS:
            return {
                ...state,
                error: null,
                products: state.products.map(product => product.id === action.payload.id ? product = 
                    action.payload : product)
            }
        case START_EDITION_PRODUCT_ERROR:
            return {
                ...state,
                error: true
            }
        default:
            return state;
    }
}
