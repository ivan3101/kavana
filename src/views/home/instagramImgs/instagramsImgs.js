import React from 'react';
import styled from "styled-components";
import InstagramItem from "./instagramItem/instagramItem";
import FindUsFb from "./findUsFb/findUsFb";
import StyledLink from "../../../components/link/link";

const InstagramImgs = () => {
    const StyledDiv = styled.div`
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
    `;

    const ImgsContainer = styled.div`
      margin-top: 30px;
      width: 100%;
      height: auto;
      position: relative;
      
      &>p {
        text-align: center;
        color: ${props => props.theme.text};
        margin-bottom: 30px;
        font-size: 1.25rem;
      }
    `;

    return (
        <ImgsContainer>
            <p>
                Siguenos en Instagram!{' '}
                <StyledLink
                    external
                    link={'http://instagram.com/kavanarevest'}
                >
                    @kavanarevest
                </StyledLink>
            </p>
            <FindUsFb>
                <StyledLink
                    external
                    link={'https://www.facebook.com/kavanarevest/'}
                >
                    encuentranos en facebook
                </StyledLink>
            </FindUsFb>
            <StyledDiv>
                <InstagramItem
                    image={'https://scontent-lga3-1.cdninstagram.com/vp/964cf64696edaee2d9de04c5af660057/5C9D7E94/t51.2885-15/e35/43516973_319267455520707_5054183609547101955_n.jpg'}
                    description={'holis'}
                    instagram
                    external
                />
                <InstagramItem
                    image={'https://scontent-lga3-1.cdninstagram.com/vp/964cf64696edaee2d9de04c5af660057/5C9D7E94/t51.2885-15/e35/43516973_319267455520707_5054183609547101955_n.jpg'}
                    description={'JA WENO'}
                    instagram
                    external
                />
                <InstagramItem
                    image={'https://scontent-lga3-1.cdninstagram.com/vp/964cf64696edaee2d9de04c5af660057/5C9D7E94/t51.2885-15/e35/43516973_319267455520707_5054183609547101955_n.jpg'}
                    description={'alksdfjlkasjflk aksdjf klasjlk dfjalskj dflaksj df aklsdjf a lksjd faskdj falskdj f' +
                    ' ajsdflk'}
                    instagram
                    external
                />
            </StyledDiv>
        </ImgsContainer>

    );
};

export default InstagramImgs;
