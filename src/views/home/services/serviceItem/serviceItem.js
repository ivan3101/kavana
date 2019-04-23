import styled from "styled-components";
import {lighten} from "polished";

const ServiceItem = styled.div`
  width: auto;
  height: auto;
  border: 2px solid transparent;
  border-right: 2px solid ${props => lighten(0.7, props.theme.text)};
  text-align: center;
  padding: 0;
  margin-bottom: 20px;
  cursor: pointer;
  transition: transform .2s ease-in-out;
  margin-right: 20px;
  
  p{
    paddin: 0;
    display: none;
    transition: transform .5s ease-in-out;
  }

  img {
    width: 200px;
    height: 200px;
  }

  :hover{
    transition: transform .2s linear;
  }

  :hover p{
    display: block;
    padding: 10px;
  }
  
  :hover img {
    transition: all .5s ease-in-out;
    transform: scale(1.2);
    
  }
  
  :hover img {
    transform: scale(1.2);
  }
  
  @media (max-width: 700px) {
    border-left: 1px solid ${props => lighten(0.7, props.theme.text)};
    width: 40vw;
    
    img {
      width: 100%;
      height: auto;
    }
  }
`;

export default ServiceItem;