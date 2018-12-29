import React from 'react';
import styled from "styled-components";
import NavItem from "../navMenu/navItem/navItem";
import CartIcon from "../cartIcon/cartIcon";
import Button from "../../Button/Button";
import {connect} from "react-redux";
import {logoutPut} from "../../../actions/auth.actions";

const Title = ({isLoggedIn, dispatch}) => {
    const StyledDiv = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 50px;
      align-self: center;
      width: 350px;
      height: 65px;
    `;

    const StyledUl = styled.ul`
      justify-content: flex-end;
      align-items: center;
      width: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      
      li {
        margin-right: 5px;
      }
    `;

    const onLogout = () => {
        dispatch(logoutPut());
    };

    return (
        <StyledDiv>
            <StyledUl>
                <CartIcon/>
                {
                    !isLoggedIn && <NavItem link={'/login'}>Login</NavItem>
                }

                {
                    isLoggedIn && (
                        <React.Fragment>
                            <NavItem link={'/admin'}>
                                Panel de Control
                            </NavItem>
                            <Button onClick={onLogout}>
                                Cerrar Sesión
                            </Button>
                        </React.Fragment>
                    )
                }
            </StyledUl>
        </StyledDiv>
    );
};

const mapStateToPros = (state) => ({
    isLoggedIn: state.auth.isAuthenticated
});

export default connect(mapStateToPros)(Title);
