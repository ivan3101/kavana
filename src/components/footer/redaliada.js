import React from 'react';
import styled from "styled-components";
import Copyright from "./copyright/copyright";
import SocialAccounts from "./socialAccounts/socialAccounts";
import Links from "./links/links";
import Red from "./links/redali";

const reda = ({ className }) => {
    return (
        <div className={className}>
            <Red/>
        </div>
    );
};

const Reda = styled(reda)`
display: inline-block;
  float:left;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  padding: 4.37rem 1.25rem;
  width: 20%;
  height: auto;
  background-color: #2E3841;
  border-radius: 10px 10px 0 0 ;
  
  @media (max-width: 700px) {
    display: none;
  }
`;

export default Reda;
