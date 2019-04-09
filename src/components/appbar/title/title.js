import React from 'react';
import styled from "styled-components";
import NavItem from "../navMenu/navItem/navItem";
import CartIcon from "../cartIcon/cartIcon";
import Button from "../../Button/Button";
import {connect} from "react-redux";
import {logoutPut} from "../../../actions/auth.actions";

const Title = ({isLoggedIn, dispatch, role, username }) => {
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
                    !isLoggedIn && (
                        <React.Fragment>
                            <NavItem link={'/login'}>Iniciar Sesión</NavItem>
                            <NavItem link={"/register"}>Registrarse</NavItem>
                        </React.Fragment>
                    )
                }

                {
                    isLoggedIn && (
                        <p>Bienvenido, {username}</p>
                    )
                }
                {
                    isLoggedIn && role === "ADMIN" && (
                        <NavItem link={'/admin'}>
                            Panel de Control
                        </NavItem>
                    )
                }

                {
                    isLoggedIn && (
                            <Button onClick={onLogout}>
                                Cerrar Sesión
                            </Button>
                    )
                }
            </StyledUl>
        </StyledDiv>
    );
};

const mapStateToPros = (state) => ({
    isLoggedIn: state.auth.isAuthenticated,
    role: state.auth.role,
    username: state.auth.username
});

export default connect(mapStateToPros)(Title);
