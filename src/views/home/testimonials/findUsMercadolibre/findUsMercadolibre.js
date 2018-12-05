import React from 'react';
import ResponsiveImg from "../../../../components/responsiveImg/responsiveImg";
import mercadolibreLogo from "../../../../assets/icons/mercadolibre.png";
import StyledLink from "../../../../components/link/link";
import styled from "styled-components";

const FindUsMercadolibre = ({ className }) => {
    return (
        <div className={className}>
            <StyledLink
                external
                link={'https://perfil.mercadolibre.com.ve/KAVANAREVESTIMIENTOS'}
            >
                <ResponsiveImg src={mercadolibreLogo}/>
            </StyledLink>
        </div>
    );
};

const StyledFindUsMercadolibre = styled(FindUsMercadolibre)`
  transform-origin: top left;
  transform: rotateZ(90deg) translateY(-100%) translateX(-50%);
  position: absolute;
  left: 0;
  top: 50%;
  
  & > a {
    height: 100%;
    border-bottom: none;
    
    :hover {
      border-bottom: none;
    }
  }
`;

export default StyledFindUsMercadolibre;
