import React from 'react';
import styled from "styled-components";
import NavItem from "./navItem/navItem";
import CatalogoSubmenu from "./catalogoSubmenu/catalogoSubmenu";

const NavMenu = ({ children }) => {
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
      flex-wrap: wrap;
    `;

    return (
        <StyledNav>
            <StyledUl>
                {children}
                <NavItem link={'/inicio'}>Inicio</NavItem>
                <NavItem link={'/blog/1'}>Blog</NavItem>
                <NavItem link={'/inicio#servicios'}>Servicios</NavItem>
                <NavItem link={'/catalogo'} submenu={<CatalogoSubmenu/>}>Catálogo</NavItem>
                <NavItem link={'/contacto'}>Contacto</NavItem>
            </StyledUl>
        </StyledNav>
    );
};

export default NavMenu;
