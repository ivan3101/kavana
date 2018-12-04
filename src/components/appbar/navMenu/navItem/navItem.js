import React from 'react';
import styled from "styled-components";

const NavItem = ({ children, link }) => {
    const StyledLink = styled.a`
      padding: 0.85rem 1.15rem;
      display: inline-block;
      cursor: pointer;
      color: ${props => props.theme.text};
      box-shadow: ${props => props.theme.secondary} 0 0 0 0 inset;
      font-weight: 500;
      transition: all 300ms cubic-bezier(0.390, 0.500, 0.150, 1.360);
      
      :hover {
        box-shadow: ${props => props.theme.secondary} 0 0 0 40px inset;
        color: ${props => props.theme.primary};
      }
    `;

    return (
        <li>
            <StyledLink href={link}>{ children }</StyledLink>
        </li>
    );
};

export default NavItem;
