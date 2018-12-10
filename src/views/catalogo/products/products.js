import React from 'react';
import CardGrid from "../../../components/cardGrid/cardGrid";
import {productsList} from "./productsList";
import InstagramItem from "../../home/instagramImgs/instagramItem/instagramItem";
import Button from "../../../components/Button/Button";
import {CatalogoContainer} from "../catalogo";

const Products = ({ match, history }) => {

    const onAddProduct = () => {
        history.push('/admin/productos/agregar');
    };

    return (
        <CatalogoContainer>
            <h1>Tipos de Productos <Button onClick={onAddProduct}>añadir producto</Button></h1>
            <CardGrid>
                {
                    !!productsList.length && productsList.map(product => (
                        <InstagramItem
                            description={product.name}
                            image={product.icon}
                            link={match.url + product.url + '/1'}
                            key={product.name}
                        />
                    ))
                }
            </CardGrid>
        </CatalogoContainer>
    );
};

export default Products;
