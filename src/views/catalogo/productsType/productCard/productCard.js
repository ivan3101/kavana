import React from 'react';
import styled from "styled-components";
import ResponsiveImg from "../../../../components/responsiveImg/responsiveImg";
import test from "../../../../assets/images/accesorios.png";


const ProductCardContainer = styled.div`
  width: 300px;
  height: auto;
  margin-top: 50px;
  
  > img {
    height: 200px;
    width: 100%;
  }
`;

const ProductDescription = styled.div`
  width: 100%;
  height: auto;
  padding: 1rem;
  position: relative;
`;

const AddToCart = styled.button`
  border-radius: 50%;
  padding: 0.85rem;
  background-color: ${props => props.theme.secondary};
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 1rem;
  border: none;
  width: auto;
  height: auto;
`;

const Powered = styled.span`
  position: relative;
  bottom: 1ex; 
  font-size: 80%;
`;

const ProductCard = () => {
    return (
        <ProductCardContainer>
            <ResponsiveImg src={test}/>
            <ProductDescription>
                <p>Marico el que lo lea</p>
                <p>00 x 00 m<Powered>2</Powered></p>

                <AddToCart>

                </AddToCart>
            </ProductDescription>
        </ProductCardContainer>
    );
};

export default ProductCard;
