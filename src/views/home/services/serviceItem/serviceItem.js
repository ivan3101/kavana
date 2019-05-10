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
  transition: all .3s ease-in-out;
  
  p{
    paddin: 8px;
    width: 95%;
    font-size:14px;
    display:block;
    transition: transform .5s ease-in-out;
  }

  img {
    width: 200px;
    height: 200px;
    transition: all .3s ease-in-out;
  }

  :hover{
    transition: transform .2s linear;
    background: #f5f5f5;
  }

  :hover p{
    display: block;
    font-weight: bold;
    transition: all .3s ease-in-out;
    color: #0097A9;
  }

  :hover img {
    transition: all .3s ease-in-out;
    transform: scale(1.1);
  }

  :hover path {
    fill: #49c;
  }

  @media (max-width: 700px) {
    border-left: 1px solid ${props => lighten(0.7, props.theme.text)};
    width: 40vw;
    
    img {
      width: 100%;
      height: auto;
    }
  }
  @media (min-width: 1920px) {
    margin-right: 100px;
`;

export default ServiceItem;