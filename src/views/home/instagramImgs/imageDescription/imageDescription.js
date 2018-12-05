import React from "react";
import styled from "styled-components";
import InstagramIcon from "../instagramIcon/instagramIcon";

const TextBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  background-color: #111111;
  transition: all 300ms ease;
  
  :hover {
    opacity: 1;
    background-color: #11111199;
  }
`;

const TextDescription = styled.a`
  color: white;
  left: 5%;
  bottom: 10%;
  position: absolute;
  cursor: pointer;
  text-overflow: '... más.';
  overflow: hidden;
  white-space: nowrap;
  width: 90%;
  
  :hover {
    text-decoration: underline;
  }
`;

const ImageDescription = ({ children }) => {
    return (
        <TextBackground>
            <TextDescription>{ children }</TextDescription>
            <InstagramIcon/>
        </TextBackground>
    )
};

export default ImageDescription;