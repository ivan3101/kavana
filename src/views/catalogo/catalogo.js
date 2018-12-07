import React from 'react';
import styled from "styled-components";
import Products from "./products/products";
import {Redirect, Route, Switch} from "react-router-dom";
import ProductsType from "./productsType/productsType";

const CatalogoContainer = styled.div`
  width: 80%;
  height: auto;
  margin: 40px auto;
`;

const Catalogo = ({ match }) => {
    return (
        <CatalogoContainer>
            <Switch>
                <Route path={match.path} component={Products} exact/>
                <Route path={`${match.path}/:typeProduct`} component={ProductsType}/>
                <Redirect to={match.url}/>
            </Switch>
        </CatalogoContainer>
    );
};

export default Catalogo;
