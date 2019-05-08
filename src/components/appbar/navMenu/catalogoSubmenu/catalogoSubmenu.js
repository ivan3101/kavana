import React from 'react';
import Submenu from "../submenu/submenu";
import styled from "styled-components";
import StyledLink from "../../../link/link";

const catalogoRoutes = [
    {
        name: 'Cerámica y Porcelanatos',
        route: '/catalogo/ceramica-y-porcelanato/1'
    },
    {
        name: 'Materiales de Instalación',
        route: '/catalogo/materiales-de-instalacion/1'
    },
    {
        name: 'Piedras Ornamentales',
        route: '/catalogo/piedras-ornamentales/1'
    },
    {
        name: 'Mallas y Decorados',
        route: '/catalogo/mallas-y-decorados/1'
    },
    {
        name: 'Muebles de Baño',
        route: '/catalogo/muebles-de-baño/1'
    },
    {
        name: 'Piezas de Baño',
        route: '/catalogo/piezas-de-baño/1'
    },
    {
        name: 'Griferías',
        route: '/catalogo/griferias/1'
    },
    {
        name: 'Accesorios',
        route: '/catalogo/accesorios/1'
    }
];

const SubNavItem = styled(StyledLink)`
  color: #000000;
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
