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
import axiosClient from '../config/axios';
import Swal from 'sweetalert2';

// crear un nuevo producto - función principal
export function createNewProductAction(product) {
    return (dispatch) => {
        dispatch(newProduct());
        // Insertar en la api
        axiosClient.post('/products', product)
        .then(res => {
            dispatch(newProductSuccess(product));
        }).catch(error => {
            dispatch(newProductError());
        });
    }
}

export const newProduct = () => ({
    type: ADD_PRODUCT
});

export const newProductSuccess = product => ({
    type: ADD_PRODUCT_SUCCESS,
    payload: product
}); 

export const newProductError = () => ({
    type: ADD_PRODUCT_ERROR
});

// Obtener listado de productos (consultar API)
export function getProductsAction() {
    return (dispatch) => {
        dispatch(getProductsStart());
        // Consultar la API
        axiosClient.get('/products')
        .then(res => {
            dispatch(successProductsDownload(res.data));
        }).catch(error => {
            dispatch(errorProductsDownload());
        });
    }
}

export const getProductsStart = () => ({
    type: START_PRODUCTS_DOWNLOAD
});

export const successProductsDownload = products => ({
    type: PRODUCTS_DOWNLOAD_SUCCESS,
    payload: products
});

export const errorProductsDownload = () => ({
    type: PRODUCTS_DOWNLOAD_ERROR
});

// Función que elimina un producto específico
export function deleteProductAction(id) {
    return (dispatch) => {
        dispatch(getProductDeleted());
        // Eliminar de la API
        axiosClient.delete(`/products/${id}`)
        .then(res => {
            dispatch(deleteProductSuccess(id));
        }).catch(err => {
            dispatch(deleteProductError());
        });
    }
}

export const getProductDeleted = () => ({
    type: GET_DELETE_PRODUCT
});

export const deleteProductSuccess = id => ({
    type: DELETE_PRODUCT_SUCCESS,
    payload: id
});

export const deleteProductError = () => ({
    type: DELETE_PRODUCT_ERROR
});

// Función edita producto
export function getEditProductAction(id) {
    return (dispatch) => {
        dispatch(getEditProduct());
        axiosClient.get(`/products/${id}`)
        .then(res => {
            dispatch(getEditProductSuccess(res.data));
        }).catch(err => {
            dispatch(getEditProductError());
        });
    }
}

export const getEditProduct = () => ({
    type: GET_EDIT_PRODUCT
});

export const getEditProductSuccess = product => ({
    type: GET_EDIT_PRODUCT_SUCCESS,
    payload: product
});

export const getEditProductError = () => ({
    type: GET_EDIT_PRODUCT_ERROR
});

//Modifica un producto en la API y state
export function editProductAction(product) {
    return (dispatch) => {
        dispatch(startEditionProduct());
        axiosClient.put(`/products/${product.id}`, product)
        .then(res => {
            dispatch(startEditionProductSuccess(res.data));
            Swal.fire(
                'Almacenado',
                'El producto se actualizó correctamente',
                'success'
            )        
        }).catch(err => { 
            dispatch(startEditionProductError());
            Swal.fire(
                'Ha habido un error',
                'Hubo un error, intente más tarde',
                'error'
            ) 
        });
    }
}

export const startEditionProduct = () => ({
    type: START_EDITION_PRODUCT
});

export const startEditionProductSuccess = product => ({
    type: START_EDITION_PRODUCT_SUCCESS,
    payload: product
});

export const startEditionProductError = () => ({
    type: START_EDITION_PRODUCT_ERROR
});
