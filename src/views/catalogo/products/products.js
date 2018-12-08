import React from 'react';
import CardGrid from "../../../components/cardGrid/cardGrid";
import {productsList} from "./productsList";
import InstagramItem from "../../home/instagramImgs/instagramItem/instagramItem";

const Products = ({ match }) => {
    return (
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
    );
};

export default Products;
