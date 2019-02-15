import React from 'react';
import styled from "styled-components";
import logoImg from "../../../assets/logo/LOGO-GRIS.png";
import ResponsiveImg from "../../responsiveImg/responsiveImg";

const copyright = ({ className }) => {

    const Text = styled.p`
      font-size: 0.80rem;
    `;

    return (
        <div className={className}>
            <ResponsiveImg src={logoImg}/>
            <Text>Kavanayen Suministros 2012 C.A. Rif J-40143131-3</Text>
        </div>
    );
};

const Copyright = styled(copyright)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Copyright;
