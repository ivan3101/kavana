import React from 'react';
import styled from "styled-components";

const ServicesTitleContainer= styled.div`
  display: flex;
  width: 30%;
  height: auto;
  justify-content: center;
  align-items: center;
  background-color: #2e3841;

  
  @media (max-width: 700px) {
    width: 100%;
    padding: 1rem 0;
  }
`;

const servicesTitle = ({ className }) => {
    return (
        <ServicesTitleContainer>
            <h1 className={className}>
                Servicios
            </h1>
        </ServicesTitleContainer>
    );
};

const ServicesTitle = styled(servicesTitle)`
  color: #ffffff;
  text-align: left;
`;

export default ServicesTitle;
