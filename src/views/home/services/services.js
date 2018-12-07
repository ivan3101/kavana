import React from 'react';
import styled from "styled-components";
import ServicesTitle from "./servicesTitle/servicesTitle";
import CardGrid from "../../../components/cardGrid/cardGrid";
import {servicesItems} from "./servicesItems";
import ServiceItem from "./serviceItem/serviceItem";
import ResponsiveImg from "../../../components/responsiveImg/responsiveImg";

const ServicesContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
`;

const Services = () => {
    return (
        <ServicesContainer>
            <ServicesTitle/>
            <CardGrid>
                {
                    !!servicesItems.length && servicesItems.map((service) => (
                        <ServiceItem key={service.name}>
                            <ResponsiveImg src={service.icon} style={{width: '200px', height: '200px'}}/>
                            <p>{ service.name }</p>
                        </ServiceItem>
                    ))
                }
            </CardGrid>
        </ServicesContainer>
    );
};

export default Services;
