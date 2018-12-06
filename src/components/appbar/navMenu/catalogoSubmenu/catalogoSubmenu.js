import React from 'react';
import Submenu from "../submenu/submenu";
import styled from "styled-components";
import StyledLink from "../../../link/link";

const catalogoRoutes = [
    {
        name: 'Cerámica',
        route: '/catalogo/ceramica'
    },
    {
        name: 'Porcelanato',
        route: '/catalogo/porcelanato'
    },
    {
        name: 'Piedras Ornamentales',
        route: '/catalogo/piedras-ornamentales'
    },
    {
        name: 'Mallas y Decorados',
        route: '/catalogo/mallas-y-decorados'
    },
    {
        name: 'Muebles de Baño',
        route: '/catalogo/muebles-de-baño'
    },
    {
        name: 'Piezas de Baño',
        route: '/catalogo/piezas-de-baño'
    },
    {
        name: 'Griferias',
        route: '/catalogo/griferias'
    },
    {
        name: 'Accesorios',
        route: '/catalogo/accesorios'
    }
];

const SubNavItem = styled(StyledLink)`
  color: #ffffff;
  padding: 1rem;
  border-bottom: none;
  
  :hover {
    border-bottom: none;
  }
`;

const CatalogoSubmenu = () => {
    return (
        <Submenu>
            {
                catalogoRoutes.map((item) => (
                    <SubNavItem link={item.route} key={item.name}>
                        { item.name }
                    </SubNavItem>
                ))
            }
        </Submenu>
    );
};

export default CatalogoSubmenu;
