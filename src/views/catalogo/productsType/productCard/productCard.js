import React from 'react';
import styled from "styled-components";
import ResponsiveImg from "../../../../components/responsiveImg/responsiveImg";

const ProductCardContainer = styled.div`
  width: 300px;
  height: auto;
  margin-top: 50px;
  box-shadow: 0 0 2px 2px #dddddd;
  padding: 1rem;
  border-radius: 6px;
  
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

const ProductFooter = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  width: 100%;
`;

const Powered = styled.span`
  position: relative;
  bottom: 1ex; 
  font-size: 80%;
`;

const ProductCard = ({ icon, children, name, size }) => {
    return (
        <ProductCardContainer>
            <ResponsiveImg src={icon}/>
            <ProductDescription>
                <p>{name}</p>
                <p>{size} m<Powered>2</Powered></p>

                <ProductFooter>
                    {
                        children
                    }
                </ProductFooter>
            </ProductDescription>
        </ProductCardContainer>
    );
};

export default ProductCard;
