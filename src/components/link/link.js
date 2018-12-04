import styled from "styled-components";
import {Link as RouterLink} from "react-router-dom";

const Link = styled(RouterLink)`
  cursor: pointer;
  color: ${props => props.theme.text};
  font-weight: 500;
  transition: all 300ms cubic-bezier(0.390, 0.500, 0.150, 1.360);
  border-bottom: 1px solid ${props => props.theme.text};
  text-decoration: none;
      
  :hover {
    color: ${props => props.theme.secondary};
    border-bottom: 1px solid ${props => props.theme.secondary};
  }
`;

export default Link;