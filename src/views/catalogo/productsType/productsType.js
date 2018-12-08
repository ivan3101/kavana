import React, {Component} from 'react';
import styled from "styled-components";
import Filters from "./filters/filters";
import CardGrid from "../../../components/cardGrid/cardGrid";
import ProductCard from "./productCard/productCard";

const ProductsTypecontainer = styled.div`
  width: 90%;
  
  h1 {
    text-transform: capitalize;
  }
`;


class ProductsType extends Component {
    render() {
        const { match } = this.props;
        const { category } = match.params;

        return (
            <ProductsTypecontainer>
                <h1>{ category.split('-').join(' ') }</h1>
                <Filters/>
                <CardGrid>
                    <ProductCard/>
                </CardGrid>
            </ProductsTypecontainer>
        );
    }
}

export default ProductsType;