import styled from "styled-components";

const CrossIcon = styled.i`
  cursor: pointer;
  width: 20px;
  height: 20px;
  
  :before, :after {
    position: absolute;
    left: 15px;
    content: ' ';
    height: 33px;
    width: 2px;
    background-color: ${props => props.crossColor || '#333333'};
  }
  
  :before {
    transform: rotate(45deg);
  }
  
  :after {
    transform: rotate(-45deg);
  }
`;

export default CrossIcon;
