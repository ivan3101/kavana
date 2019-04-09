import React from 'react';
import styled from "styled-components";
import ResponsiveImg from "../../../../components/responsiveImg/responsiveImg";
import locationImg from "../../../../assets/images/location.png";

const Location = ({ className }) => {
    return (
        <div className={className}>
            <ResponsiveImg src={locationImg}/>
        </div>
    );
};

export const StyledLocation = styled(Location)`
  width: auto;
  height: 400px;
  max-height: 400px;
  
  img {
    display: block;
    margin: 0 auto;
  }
  
  @media (max-width: 700px) {
    display: none;
  }
`;

export default StyledLocation;
