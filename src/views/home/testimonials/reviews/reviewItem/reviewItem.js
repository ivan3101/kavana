import React from 'react';
import styled from "styled-components";
import profileIcon from "../../../../../assets/icons/profile.png";
import ResponsiveImg from "../../../../../components/responsiveImg/responsiveImg";

const ReviewItem = ({ review, username }) => {
    const StyledDiv = styled.div`
      display: block;
      flex-direction: column;
      margin-bottom: 15px;
      width: 100%;
      height: auto;
      
      // @media (max-width: 700px) {
      //  margin-bottom: 2rem;
      //}
    `;

    const StyledTextReview = styled.p`
      font-weight: 500;
      margin-bottom: 5px;
    `;

    const StyledUsername = styled.p`
      font-size: 0.90rem;
      height: 30px;
      display: block;
      //flex-direction: row;
      text-transform: uppercase;
      //align-items: center;
      margin-bottom: 5px;
      //min-height: 30px;
      
      img {
        width: auto;
        height: 30px;
      }
    `;

    return (
        <StyledDiv>
            <StyledTextReview>"{ review }"</StyledTextReview>
            <StyledUsername>
                <ResponsiveImg src={profileIcon}/>
                { username }
            </StyledUsername>
        </StyledDiv>
    );
};

export default ReviewItem;
