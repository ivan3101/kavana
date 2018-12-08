import React from 'react';
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import Products from "../products/products";
import ProductCatalogo from "../../catalogo/products/products";
import AddProduct from "../addProduct/addProduct";
import EditProduct from "../editProduct/editProduct";

const AdminRoutes = ({ match }) => {
    const { path, url } = match;

    return (
        <Switch>
            <Route path={`${path}/productos/agregar`} component={AddProduct}/>
            <Route path={`${path}/productos/catalogo`} component={ProductCatalogo} exact/>
            <Route path={`${path}/productos/editar/:productId`} component={EditProduct}/>
            <Route path={`${path}/productos/catalogo/:category/:page`} component={Products}/>
            <Route path={`${path}/publicaciones/:page`}/>
            <Redirect to={`${url}/productos/catalogo`}/>
        </Switch>
    );
};

export default withRouter(AdminRoutes);
