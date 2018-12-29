import React from 'react';
import styled from "styled-components";
import StyledContactIcons from "./contactIcons/contactIcons";
import StyledLocation from "./location/location";
import StyledContactInfo from "./contactInfo/contactInfo";
import ContactForm from "../../contact/contact";
import Modal from "../../../components/modal/modal";

const StyledContactForm = styled(ContactForm)`
  margin: 0;
  width: 100%;
  padding: 0;
  
  form {
    width: 100%;
  }
`;

class Contact extends React.Component {

    state = {
      showModal: false
    };

    onShowModal = () => {
        this.setState((prevState) => ({
            showModal: !prevState.showModal
        }))
    };

    render() {
        const {className} = this.props;
        return (
            <div className={className}>
                <Modal
                    show={this.state.showModal}
                    closeCb={this.onShowModal}
                >
                    <StyledContactForm/>

                </Modal>
                <StyledContactIcons onClick={this.onShowModal}/>
                <StyledLocation/>
                <StyledContactInfo/>
            </div>
        );
    }
}

const StyledContact = styled(Contact)`
  display: flex;
  flex-direction: row;
  gap: 80px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export default StyledContact;
