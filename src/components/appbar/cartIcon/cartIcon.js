import styled from "styled-components";
import {clearCart, removeFromCart} from "../../../actions/cart.actions";
import Modal from "../../modal/modal";
import closeIcon from "../../../assets/icons/close.svg";
import * as axios from "axios";
import cart from "../../../assets/icons/CARRITO-BOTON.png";
import {connect} from "react-redux";
import React from "react";
import ResponsiveImg from "../../responsiveImg/responsiveImg";
import SpinnerLoading from "../../cart/cart";
import Button from "../../Button/Button";
import SubmitError from "../../form/submitError/submitError";

const CartContainer = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
 
  img {
    width: 70%;
  }
`;

const ProductsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 90%;
  transition: all 200ms;
  margin-bottom: 20px;
`;

const ProductsItem = styled.p`
  padding: 0.5rem 1.25rem 0.5rem 1rem;
  border-radius: 10px;
  background-color: #cccccc;
  position: relative;
`;

const Remove = styled.span`
  height: 10px;
  width: auto;
  position: absolute;
  right: 5px;
  cursor: pointer;
`;

class CartIcon extends React.Component {

    state = {
        loading: false,
        showModal: false,
        submitState: '',
        message: ''
    };

    onShowModal = () => {
        this.setState((prevState) => {
            if (prevState.showModal) {
                return {
                    showModal: !prevState.showModal,
                    submitState: "",
                    message: ""
                }
            } else {
                return {
                    showModal: !prevState.showModal
                }
            }
        })
    };

    onRemoveFromCart = (productId) => {
        const { dispatch } = this.props;
        dispatch(removeFromCart(productId));
    };

    onClickBuy = async () => {
        try {

            this.setState(() => ({
                loading: true
            }));

            const response = await axios.post(`${process.env.REACT_APP_API_URL}/cart/${this.props.id}`, {
                products: this.props.cart
            });

            this.setState(() => ({
                submitState: 'success',
                message: response.data.message
            }));

            this.props.dispatch(clearCart());
        } catch (e) {
            this.setState(() => ({
                submitState: 'error',
                message: 'Ocurrio un error al pedir su cotización. Por favor, vuelva a' +
                    ' intentarlo mas tarde'
            }))
        }

        this.setState(() => ({
            loading: false
        }));
    };

    render() {
        return (
            <React.Fragment>
                <Modal
                    show={this.state.showModal}
                    closeCb={this.onShowModal}
                    ref={this.modalRef}
                >
                    <h1>Lista de cotización</h1>
                    <ProductsContainer>
                        {
                            !!this.props.cart.length && this.props.cart.map(product => (
                                <ProductsItem key={product.productId}>
                                    { product.productName }
                                    <Remove onClick={() => this.onRemoveFromCart(product.productId)}>
                                        <ResponsiveImg src={closeIcon}/>
                                    </Remove>
                                </ProductsItem>
                            ))
                        }
                        {
                            !this.props.cart.length && <p>No hay elementos en el carrito</p>
                        }
                    </ProductsContainer>

                    {
                        this.state.loading && <SpinnerLoading/>
                    }

                    {
                        !this.props.isLoggedIn && <h2>Debe iniciar sesión para poder pedir una cotización</h2>
                    }

                    {
                        !this.state.loading && this.state.submitState && (
                            <SubmitError error={this.state.submitState}>
                                {this.state.message}
                            </SubmitError>
                        )
                    }

                    <Button
                        disabled={
                            !this.props.isLoggedIn
                            || !this.props.cart.length
                            || this.state.loading
                        }
                        onClick={this.onClickBuy}
                    >Pedir Cotización</Button>
                </Modal>
                <CartContainer onClick={this.onShowModal}>
                    <ResponsiveImg src={cart}/>
                </CartContainer>
            </React.Fragment>
        );
    }
}
const mapStateToProps = (state) => ({
    cart: state.cart.products,
    isLoggedIn: state.auth.isAuthenticated,
    id: state.auth.id
});

export default connect(mapStateToProps)(CartIcon);