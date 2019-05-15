import React from 'react';
import styled from "styled-components";
import Copyright from "./copyright/copyright";
import SocialAccounts from "./socialAccounts/socialAccounts";
import Links from "./links/links";

const footer = ({ className }) => {
    return (
        <div className={className}>
            <Copyright/>
            <SocialAccounts/>
            <Links/>
        </div>
    );
};

const Footer = styled(footer)`
  float:left;
  display: inline-block;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  padding: 1.5rem 1.25rem;
  width: 80%;
  height: auto;
  background-color: #A6AAAF;
  
  @media (max-width: 700px) {
    flex-wrap: wrap;
    width: 100%;
  }
`;

export default Footer;
