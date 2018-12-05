import React, {Component} from 'react';
import styled from "styled-components";
import ResponsiveImg from "../../../components/responsiveImg/responsiveImg";
import appScreens from "../../../assets/images/Perspective-App-Screens-Mock-Up.png";
import Reviews from "./reviews/reviews";
import StyledFindUsMercadolibre from "./findUsMercadolibre/findUsMercadolibre";

class Testimonials extends Component {
    state = {
        reviews: [
            {
                text: 'Marico el que lo lea',
                username: 'ivan31'
            },
            {
                text: 'Marico el que lo lea',
                username: 'ivan31'
            },
            {
                text: 'Marico el que lo lea',
                username: 'ivan31'
            },
            {
                text: 'Marico el que lo lea',
                username: 'ivan31'
            },
            {
                text: 'Marico el que lo lea',
                username: 'ivan31'
            },
            {
                text: 'Marico el que lo lea',
                username: 'ivan31'
            },
            {
                text: 'Marico el que lo lea',
                username: 'ivan31'
            },
            {
                text: 'Marico el que lo lea',
                username: 'ivan31'
            },
            {
                text: 'Marico el que lo lea',
                username: 'ivan31'
            },
            {
                text: 'Marico el que lo lea',
                username: 'ivan31'
            }
        ]
    };


    render() {
        const { className } = this.props;
        const { reviews } = this.state;

        return (
            <div className={className}>
                <StyledFindUsMercadolibre/>
                <div>
                    <ResponsiveImg src={appScreens}/>
                </div>
                <Reviews reviews={reviews}/>
            </div>
        );
    }
}

const StyledTestimonials = styled(Testimonials)`
      margin-top: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1rem;
      flex-direction: row;
      height: 500px;
      flex-basis: 0;
      flex-grow: 1;
      position: relative;
      
      & > div {
        width: 50%;
        padding: 1rem;
        overflow: hidden;
        height: 100%;
      }
      
      & > div:first-child {
        height: 100px;
        padding: 0;
        width: auto;
      }
    `;

export default StyledTestimonials;
