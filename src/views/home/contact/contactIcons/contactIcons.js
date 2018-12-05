import React from 'react';
import styled from "styled-components";
import ResponsiveImg from "../../../../components/responsiveImg/responsiveImg";
import correoIcon from "../../../../assets/icons/correo.png";

const ContactIcons = ({ className }) => {
    const IconContainer = styled.div`
      height: 120px;
      padding: 0.85rem;
      border-bottom: 2px solid #606060;
    `;

    return (
        <div className={className}>
            <IconContainer>
                <ResponsiveImg src={correoIcon}/>
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
`;

export default StyledContactIcons;
