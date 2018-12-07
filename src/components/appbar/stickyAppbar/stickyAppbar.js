import React, {Component} from 'react';
import NavMenu from "../navMenu/navMenu";
import styled from "styled-components";
import logo from "../../../assets/logo/logo svg-19.svg";
import ResponsiveImg from "../../responsiveImg/responsiveImg";
import throttle from "lodash.throttle";

const activeClass = 'fixed';

const StickyContainer = styled.div`
  position: fixed;
  visibility: hidden;
  top: 0;
  width: 100%;
  z-index: 2;
  background-color: white;
  height: 45px;
  transition: transform 300ms ease-in;
  transform: translateY(-1000%);
  
  &.${activeClass} {
     visibility: visible;
     transform: translateY(0);
  }
`;

const StyledLogo = styled(ResponsiveImg)`
  height: 40px;
  width: auto;
`;

class StickyAppbar extends Component {

    navRef = React.createRef();

    componentDidMount() {
        if (document.documentElement.scrollTop >= 240) {
            if (!this.navRef.current.classList.contains(activeClass)) {
                this.navRef.current.classList.add(activeClass)
            }
        }
        window.addEventListener('scroll', throttle(this.handleScroll.bind(this), 100))
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll.bind(this));
    }

    handleScroll = () => {
        if (document.documentElement.scrollTop >= 240) {
            if (!this.navRef.current.classList.contains(activeClass)) {
                this.navRef.current.classList.add(activeClass)
            }
        } else {
            if (this.navRef.current.classList.contains(activeClass)) {
                this.navRef.current.classList.remove(activeClass)
            }
        }
    };

    render() {

        return (
            <StickyContainer ref={this.navRef}>
                <NavMenu>
                    <StyledLogo src={logo}/>
                </NavMenu>
            </StickyContainer>
        );
    }
}

export default StickyAppbar;