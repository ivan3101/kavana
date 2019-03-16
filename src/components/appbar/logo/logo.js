import React from "react";
import styled from "styled-components";
import logo from "../../../assets/logo/logo svg-19.svg";
import {Link} from "react-router-dom";

const LogoImg = styled.img`
  object-fit: contain;
  width: auto;
  height: 100%;
  margin-left: 20px;
`;

const LogoLink = styled(Link)`
  width: auto;
  height: 100%;
`;

const Logo = () => (
    <LogoLink to={"/inicio"}>
       <LogoImg src={logo}/>
    </LogoLink>
);

export default Logo;