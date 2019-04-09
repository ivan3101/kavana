import React from 'react';
import styled from "styled-components";
import ResponsiveImg from "../../../../components/responsiveImg/responsiveImg";
import correoIcon from "../../../../assets/icons/correo-21.svg";
import cajaIcon from "../../../../assets/icons/caja-23.svg";
import {withRouter} from "react-router-dom";

const ContactIcons = ({ className, onClick, history }) => {
    const IconContainer = styled.div`
      height: 200px;
      padding: 0.85rem;
      cursor: pointer;
    `;

    const toContactUs = () => {
        window.scrollTo(0, 0);
        history.push("/contacto");
    };

    return (
        <div className={className}>
            <IconContainer onClick={toContactUs}>
                <ResponsiveImg src={correoIcon}/>
            </IconContainer>
            <IconContainer onClick={onClick}>
                <ResponsiveImg src={cajaIcon}/>
            </IconContainer>
        </div>
    );
};

const StyledContactIcons = styled(ContactIcons)`
  height: 100%;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  @media (max-width: 700px) {
    display: none;
  }
`;

export default withRouter(StyledContactIcons);
