import React from 'react';
import mercadolibreLogo from "../../../../assets/icons/mercadolibre.png";
import styled from "styled-components";
import IconLink from "../../../../components/iconLink/iconLink";

const FindUsMercadolibre = ({ className }) => {
    return (
        <div className={className}>
            <IconLink
                external
                link={'https://perfil.mercadolibre.com.ve/KAVANAREVESTIMIENTOS'}
                icon={mercadolibreLogo}
            >
            </IconLink>
        </div>
    );
};

const StyledFindUsMercadolibre = styled(FindUsMercadolibre)`
  transform-origin: top left;
  transform: rotateZ(-90deg) translateX(-50%) translateY(-20%);
  position: absolute;
  left: 0;
  top: 50%;
`;

export default StyledFindUsMercadolibre;
