import React from 'react';
import styled from "styled-components";
import Title from "../title/title";
import Logo from "../logo/logo";

const Branding = () => {

    const StyledDiv = styled.div`
      display: flex;
      justify-content: space-between;
      padding: 1.25rem 1rem;
      width: 100%;
      height: 150px;
    `;

    return (
        <StyledDiv>
            <Logo />
            <Title/>
        </StyledDiv>
    );
};

export default Branding;
