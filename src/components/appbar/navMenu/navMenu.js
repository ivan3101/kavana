import React from 'react';
import styled from "styled-components";
import NavItem from "./navItem/navItem";

const NavMenu = () => {
    const StyledNav = styled.nav`
      width: 50%;
      height: auto;
      margin: 0 auto;
    `;

    const StyledUl = styled.ul`
      justify-content: space-between;
      align-items: center;
      width: 100%;
      display: flex;
      flex-direction: row;
    `;

    return (
        <StyledNav>
            <StyledUl>
                <NavItem>inicio</NavItem>
                <NavItem>blog</NavItem>
                <NavItem>servicios</NavItem>
                <NavItem>catálogo</NavItem>
                <NavItem>contacto</NavItem>
            </StyledUl>
        </StyledNav>
    );
};

export default NavMenu;
