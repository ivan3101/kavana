import React from 'react';
import styled from "styled-components";
import {NavLink} from "react-router-dom";

const activeClassName = 'nav-link-active';

const NavItem = ({ children, link }) => {
    const StyledLink = styled(NavLink).attrs({
        activeClassName
    })`
      padding: 0.75rem 0;
      display: inline-block;
      cursor: pointer;
      color: ${props => props.theme.text};
      font-weight: 500;
      transition: all 300ms cubic-bezier(0.390, 0.500, 0.150, 1.360);
      text-decoration: none;
      border-bottom: 1px solid transparent;
      
      :hover {
        color: ${props => props.theme.secondary};
        border-bottom: 1px solid ${props => props.theme.secondary};
      }
      
      &.${activeClassName} {
        color: ${props => props.theme.secondary};
        border-bottom: 1px solid ${props => props.theme.secondary};
      }
    `;

    return (
        <li>
            <StyledLink to={link} activeClassName={activeClassName}>{ children }</StyledLink>
        </li>
    );
};

export default NavItem;
