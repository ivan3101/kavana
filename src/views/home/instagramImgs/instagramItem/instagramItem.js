import React from 'react';
import ResponsiveImg from "../../../../components/responsiveImg/responsiveImg";
import styled from "styled-components";
import ImageDescription from "../imageDescription/imageDescription";

const InstagramItem = ({ image, description, instagram, external, link }) => {

    const StyledDiv = styled.div`
      width: 300px;
      height: 300px;
      position: relative;
    `;

    return (
        <StyledDiv>
            <ResponsiveImg src={image}/>
            <ImageDescription instagram={instagram} external={external} link={link}>
                { description }
            </ImageDescription>
        </StyledDiv>
    );
};

export default InstagramItem;
