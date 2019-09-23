import React, { useEffect, Fragment, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEditProductAction, editProductAction } from '../actions/productsAction';
import { formValidatedAction, validatedSuccess, validatedError } from '../actions/validatedAction';

const EditProductComponent = ({match, history}) => {

    // Crear ref
    const bookNameRef = useRef('');
    const bookPriceRef = useRef('');

    const dispatch = useDispatch();
    const editProduct = product => dispatch(editProductAction(product));
    const formValidated = () => dispatch(formValidatedAction());
    const formValidatedSuccess = () => dispatch(validatedSuccess());
    const formValidatedError = () => dispatch(validatedError());

    // Obtener ID a editar
    const { id } = match.params;

    useEffect(() => {
        dispatch(getEditProductAction(id));
    }, [dispatch, id]);

    //Acceder al state (mapstatetoprops)
    const product = useSelector(state => state.products.product);
    const error = useSelector(state => state.products.error);

    if (!product) {
        return 'cargando...'
    }

    const onSubmitEdit = e => {
        e.preventDefault();

        //Validar Formulario
        formValidated();
        if (bookNameRef.current.value.trim() === '' || bookPriceRef.current.value.trim() === '') {
            formValidatedError();
            return;
        }
        formValidatedSuccess();

        editProduct({
            id,
            bookName: bookNameRef.current.value,
            bookPrice: bookPriceRef.current.value
        });

        //redireccionar
        history.push('/');
    }

    return ( 
        <Fragment>
            { error ?
                <div className="font-weight-bold alert alert-danger text-center mt-4">Hubo un error intenta de nuevo</div> 
                : 
                <div className="row justify-content-center mt-5">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-body">
                                <h2 className="text-center">Editar Producto</h2>
                                <form onSubmit={onSubmitEdit}>
                                    <div className="form-group">
                                        <label>Titulo</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Titulo"
                                            defaultValue={product.bookName}
                                            ref={bookNameRef}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Precio del Producto</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Precio"
                                            defaultValue={product.bookPrice}
                                            ref={bookPriceRef}
                                        />
                                    </div>

                                    <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Guardar Cambios</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </Fragment>
     );
}
 
export default EditProductComponent;
