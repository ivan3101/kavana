import React from 'react';
import ResponsiveImg from "../../../../components/responsiveImg/responsiveImg";
import styled from "styled-components";
import ImageDescription from "../imageDescription/imageDescription";
import {withRouter} from "react-router-dom";

const InstagramItem = ({ image, description, instagram, external, link, history }) => {

    const StyledDiv = styled.div`
      width: 300px;
      height: 300px;
      position: relative;
      cursor: pointer;
      flex: 0 0 33%;
      margin-top: 20px;
      
      img {
        width: 100%;
      }

      @media (max-width: 700px) {
        margin-bottom: 15px;
        flex: 0 0 100%;
      }
    `;

    const onClick = () => {
        history.push(link)
    };

    return (
        <StyledDiv onClick={onClick}>
            <ResponsiveImg src={image}/>
            <ImageDescription instagram={instagram} external={external} link={link}>
                { description }
            </ImageDescription>
        </StyledDiv>
    );
};

export default withRouter(InstagramItem);
