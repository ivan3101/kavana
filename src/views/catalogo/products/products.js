import React from 'react';
import CardGrid from "../../../components/cardGrid/cardGrid";
import {productsList} from "./productsList";
import InstagramItem from "../../home/instagramImgs/instagramItem/instagramItem";

const Products = () => {
    return (
        <CardGrid>
            {
                !!productsList.length && productsList.map(product => (
                    <InstagramItem
                        description={product.name}
                        image={product.icon}
                        link={product.url}
                        key={product.name}
                    />
                ))
            }
        </CardGrid>
    );
};

export default Products;
