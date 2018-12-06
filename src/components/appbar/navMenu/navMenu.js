import React from 'react';
import styled from "styled-components";
import NavItem from "./navItem/navItem";
import CatalogoSubmenu from "./catalogoSubmenu/catalogoSubmenu";

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
                <NavItem link={'/inicio'}>inicio</NavItem>
                <NavItem link={'/blog'}>blog</NavItem>
                <NavItem link={'/servicios'}>servicios</NavItem>
                <NavItem link={'/catalogo'} submenu={<CatalogoSubmenu/>}>catálogo</NavItem>
                <NavItem link={'/contacto'}>contacto</NavItem>
            </StyledUl>
        </StyledNav>
    );
};

export default NavMenu;
