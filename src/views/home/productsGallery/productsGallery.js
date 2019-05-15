import React, {Component} from 'react';
import * as axios from "axios";
import CardGrid from "../../../components/cardGrid/cardGrid";
import SpinnerLoading from "../../../components/spinnerLoading/spinnerLoading";
import {withRouter} from "react-router-dom";
import {addToCart} from "../../../actions/cart.actions";
import {connect} from "react-redux";
import ProductCard from "../../catalogo/productsType/productCard/productCard";

class ProductsGallery extends Component {

    state = {
        products: [],
        loading: false
    };

    async componentDidMount() {
        try {

            this.setState(() => ({
                loading: true
            }));

            const response = await axios.get(`${process.env.REACT_APP_API_URL}/products?limit=5`);

            const { products } = response.data.data;

            this.setState(() => ({
                products,
                loading: false
            }))
        } catch (e) {
            console.log(e);
            this.setState(() => ({
                loading: false
            }))
        }
    }

    onClickProduct = (id) => {
        const { history } = this.props;

        history.push(`/catalogo/producto/${id}`);
    };

    inCart = (productId) => {
        const {cart} = this.props;
        return cart.findIndex(product => product.productId === productId) > -1;
    };

    onAddCart = (productId, productName) => {
        const { dispatch } = this.props;

        if (!this.inCart(productId)) {
            dispatch(addToCart({productId, productName}));
        }

    };

    render() {
        const { loading, products } = this.state;

        return (
            <CardGrid>
                {loading && !products.length && <SpinnerLoading/>}
                {!loading && products.length && products.map((product, index) => (
                    <ProductCard
                        icon={product.icon.path}
                        name={product.name}
                        size={product.size}
                        key={index}
                        onClick={() => this.onClickProduct(product._id)}
                        onAddToCart={() => this.onAddCart(product._id, product.name)}
                        cart={true}
                        inCart={this.inCart(product._id)}
                    >
                    </ProductCard>))}
            </CardGrid>
        );
    }
}

const mapStateToProps = (state) => ({
    cart: state.cart.products
});

export default withRouter(connect(mapStateToProps)(ProductsGallery));