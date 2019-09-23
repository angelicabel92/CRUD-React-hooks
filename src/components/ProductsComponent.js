import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { getProductsAction, deleteProductAction } from '../actions/productsAction';

const ProductsComponent = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        // Productos cuando el componente esté listo
        const getProducts = () => dispatch(getProductsAction());
        getProducts();
    }, [dispatch]);

    //Acceder al state
    const loading = useSelector(state => state.products.loading);
    const error = useSelector(state => state.products.error);
    const products = useSelector(state => state.products.products);

    const getProductDeleted = id => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: "Un producto eliminado no se puede recuperar",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminarlo!',
            cancelButtonText: 'Cancelar'
            }).then((result) => {
            if (result.value) {
                Swal.fire(
                'Eliminado!',
                'Tu producto ha sido eliminado.',
                'success'
                )
                dispatch(deleteProductAction(id));
            }
        })
    }

    return ( 
        <React.Fragment>
           {error ? 
                <div className="font-weight-bold alert alert-danger text-center mt-4">Hubo un error...</div>
                : null }
                <h2 className="text-center my-5">Listado de Productos</h2>
                <table className="table table-striped">
                    <thead className="bg-primary table-dark">
                        <tr className="text-center">
                            <th scope="col">Nombre</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Acciones</th>
                        </tr>   
                    </thead>
                    <tbody>
                        {products.map(product => (
                            <React.Fragment key={product.id}>
                                <tr>
                                    <td>{product.bookName}</td>
                                    <td><span className="font-weight-bold">{product.bookPrice} €</span></td>
                                    <td className="acciones">
                                        <Link to={`/product/edit/${product.id}`} className="btn btn-primary mr-2">Editar</Link>
                                        <button onClick={() => getProductDeleted(product.id)} className="btn btn-danger">Eliminar</button>
                                    </td>
                                </tr>
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
                { loading ? 'Cargando...' : null }
        </React.Fragment>
     );
}
 
export default ProductsComponent;
