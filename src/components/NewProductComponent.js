import React, { useState } from 'react';
//Redux
import { createNewProductAction } from '../actions/productsAction';
import { formValidatedAction, validatedSuccess, validatedError } from '../actions/validatedAction';
import { useDispatch, useSelector } from 'react-redux';

const NewProductComponent = ({history}) => {
    const initialState = {
        bookName: '',
        bookPrice: ''
    }

    const [bookInfo, setBookInfo] = useState(initialState);

    const handleOnChange = e => {
        e.preventDefault();

        setBookInfo ({
            ...bookInfo,
            [e.target.name] : e.target.value
        });
    }

    // Crear nuevo producto
    const dispatch = useDispatch();
    const addNewProduct = (product) => dispatch(createNewProductAction(product));
    const formValidated = () => dispatch(formValidatedAction());
    const formValidatedSuccess = () => dispatch(validatedSuccess());
    const formValidatedError = () => dispatch(validatedError());

    //Obtener los datos del state
    const error = useSelector((state) => state.error.error);

    // Agregar nuevo producto
    const onSubmit = e => {
        e.preventDefault();

        formValidated();

        if (bookInfo.bookName.trim() === '' || bookInfo.bookPrice.trim() === '') {
            formValidatedError();
            return;
        }
        formValidatedSuccess();

        addNewProduct ({
            bookName: bookInfo.bookName,
            bookPrice: bookInfo.bookPrice
        });

        //redireccionar
        history.push('/');
    }

    return ( 
        <div className="row justify-content-center mt-5">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold ">Agregar Nuevo Libro</h2>
                        <form onSubmit={onSubmit}>
                            <div className="form-group">
                                <label>Nombre Libro</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Nombre Libro"
                                    name="bookName"
                                    value={bookInfo.bookName}
                                    onChange={handleOnChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Precio Libro</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Precio Libro"
                                    name="bookPrice"
                                    value={bookInfo.bookPrice}
                                    onChange={handleOnChange}
                                />
                            </div>

                            <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Agregar</button>
                        </form>
                        { error ?
                        <div className="font-weight-bold alert alert-danger text-center mt-4">Todos los campos son obligatorios</div> 
                        : null}
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default NewProductComponent;
