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
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 1.50rem 1.25rem;
  width: 100%;
  height: auto;
  background-color: transparent;
`;

export default Footer;
