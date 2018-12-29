import React from 'react';
import styled from "styled-components";
import ServicesTitle from "./servicesTitle/servicesTitle";
import CardGrid from "../../../components/cardGrid/cardGrid";
import {servicesItems} from "./servicesItems";
import ServiceItem from "./serviceItem/serviceItem";
import ResponsiveImg from "../../../components/responsiveImg/responsiveImg";
import Modal from "../../../components/modal/modal";

const ServicesContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  
  @media (max-width: 700px) {
    flex-direction: column;
  })
`;

class Services extends React.Component {

    state = {
        showModal: false,
        service: 0
    };

    onClickService = (index) => {
        this.setState(() => ({
            showModal: true,
            service: index
        }))
    };

    closeModal = () => {
        this.setState((prevState) => ({
            showModal: !prevState.showModal
        }))
    };

    render() {
        return (
            <ServicesContainer id={'servicios'} ref={this.props.forwadedRef}>
                <Modal
                    show={this.state.showModal}
                    closeCb={this.closeModal}
                >
                    {this.state.showModal && (
                        <React.Fragment>
                            <h1>{servicesItems[this.state.service].name}</h1>
                            <br/>
                            <p>{servicesItems[this.state.service].description}</p>
                        </React.Fragment>
                    )}
                </Modal>
                <ServicesTitle/>
                <CardGrid>
                    {
                        !!servicesItems.length && servicesItems.map((service, index) => (
                            <ServiceItem key={service.name} onClick={() => this.onClickService(index)}>
                                <ResponsiveImg src={service.icon}/>
                                <p>{ service.name }</p>
                            </ServiceItem>
                        ))
                    }
                </CardGrid>
            </ServicesContainer>
        );
    }
}
export default Services;
