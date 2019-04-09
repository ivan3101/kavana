import React from 'react';
import styled from "styled-components";
import {NavLink, withRouter} from "react-router-dom";

const activeClassName = 'sidebar-link-active';

const sidebar = ({ className, match}) => {

    const SidebarItem = styled(NavLink).attrs({
        activeClassName
    })`
      text-decoration: none;
      color: ${props => props.theme.text};
      
      
      &.${activeClassName} {
        font-weight: 700;
      }
    `;


    return (
        <div className={className}>
            <SidebarItem to={`${match.url}/constructores`} activeClassName={activeClassName}>Constructores</SidebarItem>
            <SidebarItem to={`${match.url}/instaladores`} activeClassName={activeClassName}>Instaladores</SidebarItem>
            <SidebarItem to={`${match.url}/arquitectos`} activeClassName={activeClassName}>Arquitectos</SidebarItem>
            <SidebarItem to={`${match.url}/diseñadores-de-interiores`} activeClassName={activeClassName}>Diseñadores de interiores</SidebarItem>
        </div>
    );
};

const Sidebar = styled(sidebar)`
  width: auto;
  padding: 1.25rem;
  display: flex;
  gap: 15px;
  flex-direction: column;
`;

export default withRouter(Sidebar);
