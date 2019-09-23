import React from 'react';
import { Link } from 'react-router-dom';

const HeaderComponent = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
            <h1>
                <Link to={'/'} className="text-light">
                    Redux Hooks, REST API y Axios
                </Link>
            </h1>
            <Link to={'/product/new'} className="btn btn-danger nuevo-post d-block d-md-inline-block">
                Agregar Producto &#43;
            </Link>
        </nav>
     );
}
 
export default HeaderComponent;
