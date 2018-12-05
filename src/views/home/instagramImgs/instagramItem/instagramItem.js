import React from 'react';
import ResponsiveImg from "../../../../components/responsiveImg/responsiveImg";
import styled from "styled-components";
import ImageDescription from "../imageDescription/imageDescription";

const InstagramItem = ({ image, description }) => {

    const StyledDiv = styled.div`
      width: 300px;
      height: 300px;
      position: relative;
    `;

    return (
        <StyledDiv>
            <ResponsiveImg src={image}/>
            <ImageDescription>
                { description }
            </ImageDescription>
        </StyledDiv>
    );
};

export default InstagramItem;
