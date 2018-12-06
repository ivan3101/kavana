import React, {Component} from 'react';
import kavanaBg from "../../assets/images/sobre-nosotros.jpg";
import styled from "styled-components";
import Description from "./description/description";

const Title = styled.h1`
  color: ${props => props.theme.secondary};
  font-size: 4rem;
  margin-bottom: 20px;
  width: auto;
  position: absolute;
  top: 35%;
  transform: translateY(-65%);
  right: 40px;
`;

class aboutUs extends Component {
    render() {
        const { className } = this.props;
        return (
            <div className={className}>
                <Title>Kavana revestimientos</Title>
                <Description/>
            </div>
        );
    }
}

const AboutUs = styled(aboutUs)`
  width: 100%;
  height: 700px;
  background-image: url("${kavanaBg}");
  background-repeat: no-repeat;
  background-size: cover;  
  position: relative;
  margin-top: 50px;
  
  :before {
    content: '';
    position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background-image: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 32%, rgba(255,255,255,1) 69%);
  }
`;

export default AboutUs;
